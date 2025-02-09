"use server";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ReactNode } from "react";

import Provider from "../Provider";

import TopBar from "@/components/HomePage/TopBar";
import { SessionAuthForNextJS } from "@/components/SuperTokens/sessionAuthForNextJS";
import { TryRefreshComponent } from "@/components/SuperTokens/tryRefreshClientComponent";
import { THomepageContext } from "@/context";
import ItineraryModel from "@/models/Itinerary";
import { ItineraryWithMongo } from "@/types/Itinerary";
import { UserMetadata } from "@/types/User";
import { getSSRSession } from "@/utils/session/getSSRSession";
import { redirect } from "next/navigation";
import { getUserMetadata } from "supertokens-node/recipe/usermetadata";
import { Footer } from "@/components/HomePage/Footer";
export default async function Layout({
  children,
}: {
  children: ReactNode;
}) {
  const { session, hasToken, hasInvalidClaims } = await getSSRSession();

  if (!session) {
    if (!hasToken) {
      return redirect("/auth");
    }

    if (hasInvalidClaims) {
      return <SessionAuthForNextJS />;
    } else {
      return <TryRefreshComponent />;
    }
  }

  const _id = session.getUserId();

  const { metadata } = (await getUserMetadata(_id)) as {
    metadata: UserMetadata;
  };

  let itinerary = (await ItineraryModel.findOne({
    _id,
  })) as ItineraryWithMongo;

  if (!itinerary) {
    itinerary = (await ItineraryModel.create({
      _id,
    })) as ItineraryWithMongo;
  }

  const ctx: THomepageContext = {
    user: {
      _id,
      metadata,
    },
    itinerary: itinerary.toJSON({
      flattenObjectIds: true,
    }),
  };

  return (
    <Provider value={ctx}>
      <div className="flex-start w-screen h-screen relative">
        <TopBar />
        <div
          style={{ height: "calc(100vh - 7.5rem)" }}
          className="mt-20 overflow-y-scroll"
        >
          {children}
          
        </div>
        <Footer></Footer>
      </div>
    </Provider>
  );
}
