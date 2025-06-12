import kroger from "./img/sponsors/kroger.png";
import haas from "./img/sponsors/haas.png";
import bae from "./img/sponsors/bae.png";
import mcps from "./img/sponsors/mcps.png";
import auvsi from "./img/sponsors/auvsi.png";
import rev from "./img/sponsors/TeamREV.png";
import aep from "./img/sponsors/aep.png";
import blacksburgEye from "./img/sponsors/BlacksburgEye.png";
import goodShepherd from "./img/sponsors/goodShepherd.png";
import nest from "./img/sponsors/nest.png";
import intuitive from "./img/sponsors/intuitive.png";
import ptc from "./img/sponsors/ptc.png";
import ebat from "./img/sponsors/ebat.png";
import aci from "./img/sponsors/aci.png";

class Sponsor {
  img: string;
  name: string;
  link: string;
  loading?: "eager" | "lazy" | undefined;

  constructor(
    img: string,
    name: string,
    link: string,
    loading?: "eager" | "lazy" | undefined
  ) {
    this.img = img;
    this.name = name;
    this.link = link;
    this.loading = loading;
  }
}

class SponsorTier {
  name: string;
  sponsors: Sponsor[];
  size: number;

  constructor(name: string, size: number, sponsors: Sponsor[]) {
    this.name = name;
    this.size = size;
    this.sponsors = sponsors;
  }
}

export const SponsorList: SponsorTier[] = [
  new SponsorTier("Gold Sponsors", 1, [
    new Sponsor(
      mcps,
      "Montgomery County Public Schools",
      "https://mcps.org",
      "eager"
    ),
  ]),
  new SponsorTier("Silver Sponsors", 3, [
    new Sponsor(rev, "REV Robotics", "https://www.revrobotics.com/", "eager"),
    new Sponsor(
      haas,
      "Gene Haas Foundation",
      "https://ghaasfoundation.org/content/ghf/en/home.html",
      "eager"
    ),
    new Sponsor(
      blacksburgEye,
      "Blacksburg Eye Associates",
      "https://www.blacksburgeye.com/",
      "lazy"
    ),
    new Sponsor(aep, "American Electric Power", "https://aep.com", "lazy"),
    new Sponsor(bae, "BAE Systems", "https://www.baesystems.com/", "lazy"),
    new Sponsor(auvsi, "AUVSI", "https://www.auvsiridgeandvalley.org/", "lazy"),
    new Sponsor(
      intuitive,
      "Intuitive Foundation",
      "https://www.intuitive-foundation.org/first-robotics/",
      "lazy"
    ),
    new Sponsor(ptc, "PTC", "https://www.ptc.com", "lazy"),
    new Sponsor(kroger, "Kroger", "https://kroger.com/", "lazy"),
    new Sponsor(
      goodShepherd,
      "Good Shepherd Chuch of the Brethren",
      "https://www.goodshepherdblacksburg.org/",
      "lazy"
    ),
  ]),
  new SponsorTier("Copperhead Sponsors", 4, [
    new Sponsor(nest, "Nest Realty", "https://www.nestrealty.com/", "lazy"),
    new Sponsor(ebat, "EBAT Consulting", "https://ebatconsulting.com/", "lazy"),
    new Sponsor(aci, "ACI", "https://aciwebs.com/", "lazy"),
  ]),
];
