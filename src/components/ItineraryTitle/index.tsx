import React, { ReactNode, useState, HTMLProps } from"react";
import itineraryTitleCSS from './itinerarytitle.module.css'
import EditableInputField from "../Input/EditableInputField"
import {faLocationDot, faCalendar} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export default function ItineraryTitle() {

    return (
      <div data-testid="title-check" className={itineraryTitleCSS.title}>
        <div className={itineraryTitleCSS.header}>
          <EditableInputField initialText="Itinerary Title" />
        </div>
        <div className="pt-10">
          <FontAwesomeIcon icon={faLocationDot} className="inline" />
          <p className="inline ml-1">Somewhere Magical</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendar} className="inline" />
          <p className="inline ml-1"> 10/4 - 10/5 </p>
        </div>
      </div>
    );

}