import { SportEvents, Sports } from '@/types/Event';
import { faker } from '@faker-js/faker';
import { randomInt } from 'crypto';
import { randomWordList, wordFromList } from '../utils';

/** Generate a random sports event
 * @param event - The type of sport to generate
 */
export const sports = (event: SportEvents): Sports => {
  const teams = {
    Football: [
      'Real Madrid',
      'Barcelona',
      'Manchester United',
      'Liverpool',
      'Bayern Munich',
      'Paris Saint-Germain',
      'Juventus',
      'AC Milan',
      'Chelsea',
      'Arsenal',
      'Manchester City',
      'Borussia Dortmund',
      'Inter Milan',
      'Atletico Madrid',
      'Ajax',
      'Roma',
      'Tottenham Hotspur',
      'PSV Eindhoven',
      'Sevilla',
      'Boca Juniors',
      'River Plate',
      'Santos FC',
      'Palmeiras',
      'Flamengo',
      'Cruzeiro',
      'Gremio',
      "FC Barcelona (Women's)",
      "Olympique Lyonnais (Women's)",
      'North Carolina Courage (NWSL)',
      'Portland Thorns FC (NWSL)'
    ],
    Baseball: [
      'New York Yankees',
      'Boston Red Sox',
      'Los Angeles Dodgers',
      'Chicago Cubs',
      'San Francisco Giants',
      'St. Louis Cardinals',
      'Houston Astros',
      'New York Mets',
      'Atlanta Braves',
      'Texas Rangers',
      'Philadelphia Phillies',
      'Detroit Tigers',
      'Oakland Athletics',
      'Washington Nationals',
      'Cleveland Guardians',
      'Chicago White Sox',
      'Toronto Blue Jays',
      'Seattle Mariners',
      'Minnesota Twins',
      'Milwaukee Brewers',
      'Cincinnati Reds',
      'Arizona Diamondbacks',
      'San Diego Padres',
      'Baltimore Orioles',
      'Pittsburgh Pirates',
      'Kansas City Royals',
      'Colorado Rockies',
      'Miami Marlins',
      'Tampa Bay Rays'
    ],
    Basketball: [
      'Los Angeles Lakers',
      'Chicago Bulls',
      'Golden State Warriors',
      'Miami Heat',
      'Boston Celtics',
      'Toronto Raptors',
      'Houston Rockets',
      'Philadelphia 76ers',
      'Dallas Mavericks',
      'Brooklyn Nets',
      'San Antonio Spurs',
      'Denver Nuggets',
      'Portland Trail Blazers',
      'Utah Jazz',
      'Milwaukee Bucks',
      'Atlanta Hawks',
      'New York Knicks',
      'Indiana Pacers',
      'Oklahoma City Thunder',
      'Phoenix Suns',
      'Orlando Magic',
      'Minnesota Timberwolves',
      'Charlotte Hornets',
      'Detroit Pistons',
      'Sacramento Kings',
      'Washington Wizards',
      'Cleveland Cavaliers',
      'Memphis Grizzlies',
      'New Orleans Pelicans',
      'Los Angeles Clippers'
    ],
    Hockey: [
      'Anaheim Ducks',
      'Arizona Coyotes',
      'Boston Bruins',
      'Buffalo Sabres',
      'Calgary Flames',
      'Carolina Hurricanes',
      'Chicago Blackhawks',
      'Colorado Avalanche',
      'Columbus Blue Jackets',
      'Dallas Stars',
      'Detroit Red Wings',
      'Edmonton Oilers',
      'Florida Panthers',
      'Los Angeles Kings',
      'Minnesota Wild',
      'Montreal Canadiens',
      'Nashville Predators',
      'New Jersey Devils',
      'New York Islanders',
      'New York Rangers',
      'Ottawa Senators',
      'Philadelphia Flyers',
      'Pittsburgh Penguins',
      'San Jose Sharks',
      'Seattle Kraken',
      'St. Louis Blues',
      'Tampa Bay Lightning',
      'Toronto Maple Leafs',
      'Vancouver Canucks',
      'Vegas Golden Knights',
      'Washington Capitals',
      'Winnipeg Jets'
    ],
    Soccer: [
      'Manchester United',
      'Real Madrid',
      'FC Barcelona',
      'Bayern Munich',
      'Liverpool',
      'Paris Saint-Germain',
      'Juventus',
      'Chelsea',
      'AC Milan',
      'Ajax',
      'Borussia Dortmund',
      'Atletico Madrid',
      'Inter Milan',
      'Arsenal',
      'Manchester City',
      'Tottenham Hotspur',
      'FC Porto',
      'AS Roma',
      'Napoli',
      'Benfica',
      'Sporting CP',
      'River Plate',
      'Boca Juniors',
      'Sao Paulo FC',
      'Flamengo',
      'Cruzeiro',
      'Palmeiras',
      'Barcelona SC',
      'Fluminense',
      'Vasco da Gama',
      'Ajax',
      'PSV Eindhoven',
      'Feyenoord',
      'Galatasaray',
      'Besiktas',
      'Fenerbahce',
      'Celtic',
      'Rangers',
      'Anderlecht',
      'Club Brugge',
      'Shakhtar Donetsk',
      'Zenit Saint Petersburg',
      'CSKA Moscow',
      'Bayer Leverkusen',
      'Schalke 04',
      'Olympique Marseille',
      'Lyon',
      'AS Monaco',
      'Porto',
      'Sporting Lisbon',
      'Benfica',
      'Sevilla FC',
      'Valencia CF',
      'Villarreal CF',
      'Real Betis',
      'Athletic Bilbao',
      'Leicester City',
      'West Ham United',
      'Leeds United',
      'Everton',
      'Wolverhampton Wanderers',
      'Crystal Palace',
      'Newcastle United',
      'Southampton',
      'Brighton & Hove Albion',
      'Aston Villa',
      'Burnley',
      'Watford',
      'Brentford'
    ],
    Tennis: [
      'Roger Federer',
      'Rafael Nadal',
      'Novak Djokovic',
      'Serena Williams',
      'Ashleigh Barty',
      'Simona Halep',
      'Naomi Osaka',
      'Dominic Thiem',
      'Stefanos Tsitsipas',
      'Daniil Medvedev',
      'Bianca Andreescu',
      'Karolina Pliskova',
      'Alexander Zverev',
      'Petra Kvitova',
      'Andrey Rublev',
      'Garbine Muguruza',
      'Andy Murray',
      'Venus Williams',
      'Kei Nishikori',
      'Victoria Azarenka',
      'Diego Schwartzman',
      'Elina Svitolina',
      'Gael Monfils',
      'Aryna Sabalenka',
      'Fabio Fognini',
      'Johanna Konta',
      'Stan Wawrinka',
      'Karolina Muchova',
      'Matteo Berrettini',
      'Anett Kontaveit',
      'David Goffin',
      'Belinda Bencic',
      'Felix Auger-Aliassime',
      'Kiki Bertens',
      'Alex de Minaur',
      'Sofia Kenin',
      'Denis Shapovalov',
      'Angelique Kerber',
      'Grigor Dimitrov',
      'Marketa Vondrousova',
      'Pablo Carreno Busta',
      'Jelena Ostapenko',
      'Casper Ruud',
      'Cori Gauff',
      'Hubert Hurkacz',
      'Madison Keys',
      'Cristian Garin',
      'Donna Vekic',
      'John Isner',
      'Dayana Yastremska',
      'Karen Khachanov',
      'Caroline Wozniacki',
      'Nick Kyrgios'
    ]
  };

  const teamsBySport = (sport: SportEvents) => {
    return teams[sport];
  };

  const team = (sport: SportEvents) => {
    return teamsBySport(sport)[randomInt(0, teamsBySport(sport).length)];
  };

  const events = {
    Football: [
      'World Cup Final',
      'Champions League Final',
      'Super Bowl',
      'FIFA Club World Cup',
      'UEFA Europa League Final',
      'Copa America Final',
      'AFC Asian Cup Final',
      'CAF Africa Cup of Nations Final',
      'CONCACAF Gold Cup Final',
      'Premier League Derby',
      'El Clasico',
      'Copa Libertadores Final',
      'Bundesliga Top Match',
      'Serie A Showdown',
      'CAF Champions League Final',
      'MLS Cup Final',
      'FA Cup Final',
      'Coppa Italia Final',
      'DFB-Pokal Final',
      'La Liga Clash',
      'EFL Cup Final',
      'Copa del Rey Final',
      'FIFA U-20 World Cup Final',
      "FIFA Women's World Cup Final",
      'Olympic Football Final',
      'AFC U-23 Championship Final',
      'CONCACAF Nations League Final',
      'FIFA U-17 World Cup Final',
      "Women's Champions League Final",
      'FIFA Beach Soccer World Cup Final'
    ],
    Baseball: [
      'Opening Day',
      'Home Run Derby',
      'All-Star Game',
      'World Series',
      'Spring Training',
      'Playoffs',
      'Wildcard Game',
      'League Championship Series (ALCS/NLCS)',
      'World Baseball Classic',
      'Hall of Fame Induction Ceremony',
      'Perfect Game',
      'No-Hitter',
      'Triple Play',
      'Grand Slam',
      'Rivalry Game',
      'Doubleheader',
      'Walk-off Win',
      'Extra-Inning Game',
      "Pitcher's Duel",
      'Baseball Winter Meetings'
    ],
    Basketball: [
      'NBA Finals',
      'NCAA March Madness',
      'FIBA Basketball World Cup',
      'NBA All-Star Weekend',
      'EuroLeague Final Four',
      'WNBA Finals',
      'Olympic Basketball Tournament',
      'NBA Draft',
      "NCAA Men's Final Four",
      "NCAA Women's Final Four",
      'FIBA Continental Cup',
      'NBA Summer League',
      'WNBA All-Star Game',
      'NBA Opening Night',
      'NBA Christmas Day Games',
      'FIBA Asia Cup',
      'NBA Global Games',
      'WNBA Draft',
      'NBA Playoffs',
      'WNBA Regular Season'
    ],
    Hockey: [
      'Stanley Cup Finals',
      'All-Star Game',
      'Winter Classic',
      'World Championships',
      'Preseason Tournaments',
      'Playoff Series',
      'Outdoor Showcase',
      'International Friendlies',
      'College Hockey Championships',
      'Youth Hockey Tournament'
    ],
    Soccer: [
      'FIFA World Cup',
      'UEFA Champions League Final',
      'Copa America',
      'Premier League Matchday',
      'La Liga El Clasico',
      'Bundesliga Derby',
      'Serie A Showdown',
      'CAF Champions League Final',
      'CONCACAF Gold Cup',
      'AFC Champions League Quarterfinals',
      'MLS All-Star Game',
      "FIFA Women's World Cup",
      'Copa Libertadores Final',
      'UEFA Europa League Final',
      'Confederations Cup',
      'EFL Championship Playoff Final',
      'Supercoppa Italiana',
      'FIFA Club World Cup',
      'CONCACAF Nations League Finals',
      'AFC Asian Cup Final'
    ],
    Tennis: [
      'Australian Open',
      'French Open (Roland Garros)',
      'Wimbledon',
      'US Open',
      'ATP Tour Finals',
      'WTA Finals',
      'Indian Wells Masters',
      'Miami Open',
      'Monte-Carlo Masters',
      'Madrid Open',
      'Italian Open',
      'Rogers Cup',
      'Cincinnati Masters',
      'Shanghai Masters',
      'Paris Masters',
      'Fed Cup',
      'Davis Cup',
      'Hopman Cup',
      'Brisbane International',
      'Sydney International',
      'Hobart International',
      'Adelaide International',
      'Kooyong Classic',
      'Mexican Open',
      'Dubai Tennis Championships',
      'Qatar Open',
      'BNP Paribas Open',
      'Miami Open',
      'Volvo Car Open',
      'Porsche Tennis Grand Prix',
      'Mutua Madrid Open',
      "Internazionali BNL d'Italia",
      'Nature Valley Classic (Birmingham)',
      'Eastbourne International',
      'Wimbledon',
      'Swiss Open Gstaad'
    ]
  };

  return {
    type: event,
    event: events[event][randomInt(0, events[event].length)],
    teams: [team(event), team(event)],
    ticketPrice: faker.number.float({ min: 1, max: 100 }),
    stadiumName: wordFromList([
      'Grand Slam Arena',
      'Victory Stadium',
      'Epic Sports Arena',
      'Spectra Stadium',
      'Unity Arena',
      'Champion Park',
      'Dynamic Dome',
      'Ultimate Coliseum',
      'Elevation Field',
      'Pinnacle Arena',
      'Harmony Stadium',
      'Summit Sports Complex',
      'Elite Arena',
      'Majestic Stadium',
      'Apex Pavilion',
      'Unity Center',
      'Triumph Arena',
      'Prime Stadium',
      'Pantheon Park',
      'Vortex Stadium',
      'Ascend Arena',
      'Infinity Field',
      'Legacy Stadium',
      'Sovereign Sports Center',
      'Crown Arena',
      'Panorama Park',
      'Ecliptic Stadium',
      'Momentum Arena',
      'Emperor Field',
      'Rising Sun Stadium',
      'Supreme Sports Complex',
      'Elysium Arena',
      'Summit Park',
      'Legacy Dome',
      'Serenity Stadium',
      'Empire Arena',
      'Harmony Park',
      'Tranquil Pavilion',
      'Legacy Field'
    ]),
    stadiumCapacity: faker.number.int({ min: 100, max: 1000 }),
    broadcastingChannels: randomWordList([
      'ABC',
      'NBC',
      'CBS',
      'FOX',
      'ESPN',
      'BBC',
      'CNN',
      'HBO',
      'MTV',
      'Discovery Channel',
      'National Geographic',
      'Cartoon Network',
      'Disney Channel',
      'History Channel',
      'TNT',
      'TBS',
      'CNBC',
      'Al Jazeera',
      'Sky Sports',
      'Star Sports',
      'MTV',
      'VH1',
      'Comedy Central',
      'Lifetime',
      'Food Network',
      'HGTV',
      'Netflix',
      'Hulu',
      'Amazon Prime Video',
      'Apple TV+',
      'Disney+',
      'BBC One',
      'FOX News',
      'Bravo',
      'A&E',
      'Syfy',
      'National Public Radio (NPR)',
      'The Weather Channel',
      'MTV',
      'E! Entertainment',
      'Travel Channel',
      'Animal Planet',
      'MTV',
      'BBC World News',
      'Sky News',
      'Fox Sports',
      'ESPN2',
      'USA Network',
      'Nickelodeon',
      'MTV',
      'C-SPAN',
      'PBS',
      'TLC'
    ])
  };
};
