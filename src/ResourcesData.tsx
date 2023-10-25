import gantt from "./img/resources/gantt.png";
import chsStats from "./img/resources/chsStats.png";
import vouchers from "./img/resources/vouchers.png";
import wiring from "./img/resources/wiring.png";
import firstChoice from "./img/resources/firstChoice.png";
import taxFilings from "./img/resources/taxFilings.png";
import grantTracking from "./img/resources/grantTracking.png";
import batteryBOM from "./img/resources/batteryBOM.png";

class Resource {
  link: string;
  title: string;
  description: string;
  img?: string;

  constructor(link: string, title: string, description: string, img?: string) {
    this.link = link;
    this.title = title;
    this.description = description;
    this.img = img;
  }
}

class ResourceSection {
  title: string;
  description: string;
  resources: Resource[];

  constructor(title: string, description: string, resources: Resource[]) {
    this.title = title;
    this.description = description;
    this.resources = resources;
  }
}

export const ResourcesList: ResourceSection[] = [
  new ResourceSection(
    "Team Resources",
    "These are resources Team 401 has developed and shares with the wider FRC community.",
    [
      new Resource(
        "https://docs.google.com/spreadsheets/d/15ujRH0sOLQmsJWa9tElm-Wd-a0wIqmZ-DhLu3vUNlCg/edit?usp=sharing",
        "Build Season Planning",
        "A collaborative task planning system with Gantt charts, personal task overviews, and daily agendas.",
        gantt
      ),
      new Resource(
        "https://docs.google.com/spreadsheets/d/1se53XvWg8KnN6T9wWMKm41tx3NCOy2c5cx84maoPmjs/edit#gid=1928859039",
        "CHS District Stats",
        "Spreadsheets and statistics tracking the competitive history and health of FIRST Chesapeake FRC teams",
        chsStats
      ),
      new Resource(
        "https://docs.google.com/spreadsheets/d/1Dg0gxjZbx33nO9YQaJIbfiLfJ-07Dq4DqlJkglyZsq0/edit?usp=sharing",
        "FRC Wiring",
        "Multiple sheets for tracking control system component wiring on FRC robots and mapping operator controls layouts.",
        wiring
      ),
      new Resource(
        "https://docs.google.com/spreadsheets/d/1fnyQ1SYe3B1nEFFoXRQ_r_ww2ssukEyWr7CNxeFfZdc/edit?usp=sharing",
        "FRC Voucher Tracking",
        "A spreadsheet for tracking FRC Kit of Parts voucher usage to help teams get the most out of the virtual kit.",
        vouchers
      ),
      new Resource(
        "https://docs.google.com/spreadsheets/d/1MMs0xswVGVvtkZm4cmEuLiZ5mZB6jAHpzYPLVGaRHug/edit?usp=sharing",
        "FIRST Choice Priority List Builder",
        "A simple sheet for building FIRST Choice priority lists and checking points totals before submtting.",
        firstChoice
      ),
      new Resource(
        "https://docs.google.com/spreadsheets/d/1oaOYT3wrMLAetd9od2UxNQryoq30J9gsSHkwR5je_YM/edit?usp=sharing",
        "FRC District Tax Filings",
        "Tracking IRS 990 Filings for US FRC District Organizations",
        taxFilings
      ),
      new Resource(
        "https://docs.google.com/spreadsheets/d/1G1QdTnZ0QEv1-qg83_ftr5lTGCiLnGkAfJLeh3I_6vk/edit?usp=sharing",
        "FRC Grant Tracking",
        "A worksheet for tracking applications and submission status for many FRC grants.",
        grantTracking
      ),
      new Resource(
        "https://docs.google.com/spreadsheets/d/1a0TK5J_OTV1hOVL-Qj_CP3aYUR3jRqawvgHWTQ2aMPQ/edit?usp=sharing",
        "Team 401 Battery BOM",
        "Our preferred battery construction parts and where to buy them.",
        batteryBOM
      ),
    ]
  ),
  new ResourceSection(
    "Community Resources",
    "These resources are developed and maintained by the FRC community and recommended by Team 401.",
    []
  ),
];
