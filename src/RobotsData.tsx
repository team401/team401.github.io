import robot2023 from "./img/robots/small2023.png";
import robot2023full from "./img/robots/big/big2023.png";
import robot2022 from "./img/robots/small2022.png";
import robot2022full from "./img/robots/big/big2022.png";
import robot2021 from "./img/robots/small2021.png";
import robot2021full from "./img/robots/big/big2021.png";
import robot2020 from "./img/robots/small2020.png";
import robot2020full from "./img/robots/big/big2020.png";
import robot2019 from "./img/robots/small2019.png";
import robot2019full from "./img/robots/big/big2019.png";
import robot2018 from "./img/robots/small2018.png";
import robot2018full from "./img/robots/big/big2018.png";
import robot2017 from "./img/robots/small2017.png";
import robot2017full from "./img/robots/big/big2017.png";
import robot2016 from "./img/robots/small2016.png";
import robot2016full from "./img/robots/big/big2016.png";
import robot2015 from "./img/robots/small2015.png";
import robot2015full from "./img/robots/big/big2015.png";

class EventInfo {
  eventName: string;
  awards: string[];
  link: string;

  constructor(eventName: string, awards: string[], link?: string) {
    this.eventName = eventName;
    this.awards = awards;
    this.link = "https://www.thebluealliance.com/event/" + link;
  }
}

class RobotInfo {
  year: number;
  name: string;
  img?: string;
  full?: string;
  cadLink?: string;
  codeLink?: string;
  techBinder?: string;
  weight?: string;
  record?: string;
  notes?: string;
  events?: EventInfo[];

  constructor(
    year: number,
    name: string,
    options?: {
      img?: string;
      full?: string;
      cadLink?: string;
      codeLink?: string;
      techBinder?: string;
      weight?: string;
      record?: string;
      notes?: string;
      events?: EventInfo[];
    }
  ) {
    this.year = year;
    this.name = name;

    this.img = options?.img;
    this.full = options?.full;
    this.cadLink = options?.cadLink;
    this.codeLink = options?.codeLink;
    this.techBinder = options?.techBinder;
    this.weight = options?.weight;
    this.record = options?.record;
    this.notes = options?.notes;
    this.events = options?.events;
  }
}

export const robots: RobotInfo[] = [
  new RobotInfo(2023, "Mušḫuššu", {
    record: "58-28-2",
    img: robot2023,
    full: robot2023full,
    weight: "112.5 lb",
    cadLink:
      "https://cad.onshape.com/documents/ba977eb0e20aee4635a57eaa/w/a56a7fbc56f14dbcbff30769",
    codeLink: "https://github.com/team401/2023-Robot-Code",
    techBinder:
      "https://drive.google.com/file/d/1XBMxCsUlEWbWIso0fsR4-QgTbwTDzjae/view?usp=share_link",
    events: [
      new EventInfo(
        "FIRST Chesapeake Blacksburg VA District Event",
        ["Event Winner", "Industrial Design Award"],
        "2023vabla"
      ),
      new EventInfo(
        "FIRST Chesapeake Glen Allen VA District Event",
        ["Event Winner", "FIRST Impact Award"],
        "2023vagle"
      ),
      new EventInfo(
        "FIRST Chesapeake District Championship",
        ["Industrial Design Award"],
        "2023chcmp"
      ),
      new EventInfo(
        "FIRST World Championship - Galileo Division",
        [],
        "2023gal"
      ),
      new EventInfo("Blue Ridge Brawl", ["Event Winner"], "2023vabrb"),
      new EventInfo("Rumble in the Roads", [], "2023varr"),
    ],
  }),
  new RobotInfo(2022, "Jörmungandr ", {
    record: "59-21-1",
    img: robot2022,
    full: robot2022full,
    weight: "105.8 lb",
    codeLink: "https://github.com/team401/2022-Robot-Code",
    cadLink:
      "https://cad.onshape.com/documents/489185223ddbfec8c89a2277/w/632bf353cba19a51e989f488",
    techBinder:
      "https://drive.google.com/file/d/14bgZD7nQk-9XXW4DcOFP1cOpHNvDAGn0/view?usp=share_link",
    events: [
      new EventInfo(
        "FIRST Chesapeake Richmond VA 3/05 Event",
        ["Chairman's Award"],
        "2022va305"
      ),
      new EventInfo(
        "FIRST Chesapeake Richmond VA 3/20 Event",
        ["Event Winner"],
        "2022va320"
      ),
      new EventInfo(
        "FIRST Chesapeake District Championship",
        ["Industrial Design Award"],
        "2022chcmp"
      ),
      new EventInfo(
        "FIRST World Championship - Galileo Division",
        [],
        "2022gal"
      ),
      new EventInfo("Blue Ridge Brawl", ["Event Winner"], "2022vabrb"),
      new EventInfo("Rumble in the Roads", ["Event Winner"], "2022varr"),
    ],
  }),
  new RobotInfo(2021, "Glycon", {
    record: "6-5-0",
    img: robot2021,
    full: robot2021full,
    cadLink:
      "https://cad.onshape.com/documents/84707311327861b9fdce8a73/w/652c81d4db21c84dc91a591d",
    techBinder:
      "https://drive.google.com/file/d/1O-RUZgj50lH8vMUX-ZaY8y-wQ7lLyuIa/view?usp=share_link",
    codeLink: "https://github.com/team401/2021-Robot-Code",
    notes:
      "Built in small groups with social distancing during the 2021 season Glycon was our first swerve drive robot and smallest robot to date. Glycon reused ball launching components from our 2020 robot but was optimized to hold just three balls for at home challenges.",
    events: [
      new EventInfo(
        "Infinite Rechage At Home Challenge - Cadmium Group",
        ["Skills Competition Winner"],
        "2021irhcd"
      ),
      new EventInfo("CHSy Champs", [], "2021vachs"),
    ],
  }),
  new RobotInfo(2020, "Mamba", {
    record: "7-8-0",
    img: robot2020,
    full: robot2020full,
    codeLink: "https://github.com/team401/2020-Robot-Code",
    cadLink:
      "https://drive.google.com/drive/folders/1ZH9v6HDBiB4bYM-yhas5Xz5IcAHHOhsz?usp=sharing",
    techBinder:
      "https://docs.google.com/spreadsheets/d/1XpBeeOpbmxH3wOLGNq6xpUi1ik0mAV4oYa5G_X_atjs/edit?usp=share_link",
    notes:
      "Leviathan's season was cut short due to the cancellation of the 2020 FRC season. Many of Leviathan's designs and components saw use in our 2021 robot and 2022 and 2023 offseason robots.",
    events: [
      new EventInfo(
        "FIRST Chesapeake Richmond VA District Event",
        ["Autonomous Award"],
        "2020vagle"
      ),
    ],
  }),
  new RobotInfo(2019, "Ouroboros", {
    record: "55-34-3",
    img: robot2019,
    full: robot2019full,
    codeLink: "https://github.com/team401/2019-Robot-Code",
    cadLink:
      "https://drive.google.com/drive/folders/1W4NTUrVC_n_i8bAivUqjFhMdpNGGCHfJ?usp=sharing",
    techBinder:
      "https://docs.google.com/spreadsheets/d/1I-6ZXyRkmzfJNMDje_uYloxcl8N80nUArxrgwYMmwB4/edit?usp=sharing",
    events: [
      new EventInfo("FIRST Chesapeake Portsmouth VA Event", [], "2019vapor"),
      new EventInfo(
        "FIRST Chesapeake Blacksburg VA Event",
        ["Chairman's Award"],
        "2019vabla"
      ),
      new EventInfo(
        "FIRST Chesapeake District Championship",
        ["Event Winner"],
        "2019chcmp"
      ),
      new EventInfo("FIRST World Championship - Curie Division", [], "2019cur"),
      new EventInfo("Blue Ridge Brawl", ["Event Winner"], "2019vabrb"),
      new EventInfo("Rumble in the Roads", ["Event Winner"], "2019varr"),
    ],
  }),
  new RobotInfo(2018, "Apophis", {
    record: "36-27-0",
    img: robot2018,
    full: robot2018full,
    codeLink: "https://github.com/team401/2018-Robot-Code",
    cadLink:
      "https://drive.google.com/drive/folders/1OMDhxXGHuhLIUFuc98WGvqWNGnNhj_yu?usp=sharing",
    techBinder:
      "https://docs.google.com/spreadsheets/d/1EEeoARwE_gVD-K3Rq7yFSZtw8TCNdIWoW9UrcANQ8vs/edit?usp=sharing",
    events: [
      new EventInfo(
        "FIRST Chesapeake Glen Allen VA Event",
        ["Event Winner", "Gracious Professionalism Award"],
        "2018vagle"
      ),
      new EventInfo(
        "FIRST Chesapeake Blacksburg VA Event",
        ["Chairman's Award"],
        "2018vabla"
      ),
      new EventInfo(
        "FIRST Chesapeake District Championship",
        ["Event Finalist", "Judges' Award"],
        "2018chcmp"
      ),
      new EventInfo("FIRST World Championship - Daly Division", [], "2018dal"),
    ],
  }),
  new RobotInfo(2017, "Phil", {
    img: robot2017,
    full: robot2017full,
    record: "35-29-1",
    cadLink:
      "https://drive.google.com/drive/folders/1kwPP_zcAugBJMBr_K-Lspbv3sBOXUBAn?usp=share_link",
    codeLink: "https://github.com/team401/2017-Robot-Code",
    techBinder:
      "https://docs.google.com/spreadsheets/d/19phOgF0MFvmUJsUwKOc-AYFOztHVuFnCOuwdu2-Yrjk/edit?usp=sharing",
    events: [
      new EventInfo(
        "FIRST Chesapeake Blacksburg VA Event",
        ["Quality Award"],
        "2017vabla"
      ),
      new EventInfo(
        "FIRST Chesapeake Portsmouth VA Event",
        ["Engineering Inspiration Award", "Safety Award"],
        "2017vapor"
      ),
      new EventInfo(
        "FIRST Chesapeake District Championship",
        ["Engineering Inspiration Award"],
        "2017chcmp"
      ),
      new EventInfo(
        "FIRST World Championship - Archimedes Division",
        [],
        "2017arc"
      ),
      new EventInfo(
        "Rumble in the Roads",
        ["Event Finalist", "Captain's Award"],
        "2017varr"
      ),
    ],
  }),
  new RobotInfo(2016, "Quetzalcoatl", {
    img: robot2016,
    full: robot2016full,
    record: "38-22-0",
    cadLink:
      "https://drive.google.com/drive/folders/1wz_eZ_hemPkTkRQ8PvtBEJDQy3kdJn9r?usp=share_link",
    codeLink: "https://github.com/team401/2016-Robot-Code",
    events: [
      new EventInfo(
        "FIRST Chesapeake Blacksburg VA Event",
        ["Imagery Award"],
        "2016vabla"
      ),
      new EventInfo(
        "FIRST Chesapeake Doswell VA Event",
        ["Event Finalist"],
        "2016vados"
      ),
      new EventInfo("FIRST Chesapeake District Championship", [], "2016chcmp"),
      new EventInfo("FIRST World Championship - Archimedes", [], "2016arc"),
    ],
  }),
  new RobotInfo(2015, "Power Surge", {
    img: robot2015,
    full: robot2015full,
    record: "0-0 (18 matches played)",
    cadLink:
      "https://drive.google.com/drive/folders/1V04KOoUnonzY4b9hqrEj9zfMybDzheQb?usp=share_link",
    codeLink: "https://code.google.com/archive/p/team401/",
    notes:
      "Power Surge was named after Team 401's original team name from 2000!",
    events: [
      new EventInfo("Rock City Regional", [], "2015arfa"),
      new EventInfo("Virginia Regional", [], "2015vari"),
    ],
  }),
];
