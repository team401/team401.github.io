export class EventInfo {
  eventName: string;
  awards: string[];
  link: string;

  constructor(eventName: string, awards: string[], link?: string) {
    this.eventName = eventName;
    this.awards = awards;
    this.link = "https://www.thebluealliance.com/event/" + link;
  }
}

export default class RobotInfo {
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
