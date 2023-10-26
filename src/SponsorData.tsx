import kroger from "./img/sponsors/kroger.png";
import haas from "./img/sponsors/haas.png";
import bae from "./img/sponsors/bae.png";
import mcps from "./img/sponsors/mcps.png";
import auvsi from "./img/sponsors/auvsi.png";
import rev from "./img/sponsors/TeamREV.png";
import nichols from "./img/sponsors/nichols.png";
import aep from "./img/sponsors/aep.png";
import schoolOfEd from "./img/sponsors/schoolOfEd.png";
import blacksburgEye from "./img/sponsors/BlacksburgEye.png";
import goodShepherd from "./img/sponsors/goodShepherd.png";
import nest from "./img/sponsors/nest.png";
import torc from "./img/sponsors/torc.png";
import rtx from "./img/sponsors/rtx.png";
import corning from "./img/sponsors/corning.png";
import gentoo from "./img/sponsors/gentoo.png";
import aci from "./img/sponsors/aci.png";
import intuitive from "./img/sponsors/intuitive.png";

class Sponsor {
  img: string;
  name: string;
  link: string;

  constructor(img: string, name: string, link: string) {
    this.img = img;
    this.name = name;
    this.link = link;
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
    new Sponsor(mcps, "Montgomery County Public Schools", "https://mcps.org"),
  ]),
  new SponsorTier("Silver Sponsors", 3, [
    new Sponsor(rev, "REV Robotics", "https://www.revrobotics.com/"),
    new Sponsor(
      haas,
      "Gene Haas Foundation",
      "https://ghaasfoundation.org/content/ghf/en/home.html"
    ),
    new Sponsor(rtx, "RTX", "https://www.rtx.com/"),
    new Sponsor(corning, "Corning", "https://www.corning.com"),
    new Sponsor(torc, "TORC Robotics", "https://torc.ai/"),
    new Sponsor(
      blacksburgEye,
      "Blacksburg Eye Associates",
      "https://www.blacksburgeye.com/"
    ),
    new Sponsor(aep, "American Electric Power", "https://aep.com"),
    new Sponsor(bae, "BAE Systems", "https://www.baesystems.com/"),
    new Sponsor(auvsi, "AUVSI", "https://www.auvsiridgeandvalley.org/"),
    new Sponsor(
      intuitive,
      "Intuitive Foundation",
      "https://www.intuitive-foundation.org/first-robotics/"
    ),
    new Sponsor(kroger, "Kroger", "https://kroger.com/"),
    new Sponsor(
      goodShepherd,
      "Good Shepherd Chuch of the Brethren",
      "https://www.goodshepherdblacksburg.org/"
    ),
  ]),
  new SponsorTier("Copperhead Sponsors", 4, [
    new Sponsor(
      schoolOfEd,
      "Virginia Tech School of Education",
      "https://liberalarts.vt.edu/departments-and-schools/school-of-education.html"
    ),
    new Sponsor(
      nichols,
      "Tammy Nichols, REALTOR",
      "http://tammynicholsrealestate.com/"
    ),
    new Sponsor(nest, "Nest Realty", "https://www.nestrealty.com/"),
    new Sponsor(gentoo, "Gentoo Technologies", "http://gentootech.com/"),
    new Sponsor(aci, "ACI", "https://aciwebs.com/"),
  ]),
];
