import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Grid, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Divider } from "@mui/material";

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

const sponsorList: SponsorTier[] = [
  new SponsorTier("Gold Sponsors", 2, [
    new Sponsor(mcps, "Montgomery County Public Schools", "https://mcps.org"),
    new Sponsor(
      blacksburgEye,
      "Blacksburg Eye Associates",
      "https://www.blacksburgeye.com/"
    ),
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
    new Sponsor(aep, "American Electric Power", "https://aep.com"),
    new Sponsor(bae, "BAE Systems", "https://www.baesystems.com/"),
    new Sponsor(auvsi, "AUVSI", "https://www.auvsiridgeandvalley.org/"),
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
export default function Sponsors() {
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="lg" sx={{ pt: 2 }}>
        <Box textAlign="center">
          <Grid container rowSpacing={5} columnSpacing={1}>
            {sponsorList.map((tier) => (
              <Box key={tier.name}>
                <Grid
                  container
                  item
                  lg={12}
                  sx={{ pt: 6, pb: 1 }}
                  maxWidth="100%"
                  justifyContent="center"
                >
                  <Typography
                    variant="h3"
                    align="left"
                    color="text.secondary"
                    component="h1"
                  >
                    {tier.name}
                  </Typography>
                </Grid>
                <Divider
                  sx={{
                    mb: 6,
                    borderBottomWidth: 2,
                    background: "#333",
                  }}
                />
                <Grid
                  container
                  item
                  key={tier.name}
                  columnSpacing={12}
                  sx={{ pb: 4 }}
                >
                  {tier.sponsors.map((sponsor) => (
                    <Grid
                      xs={12 / Math.ceil(tier.size / 2)}
                      sm={12 / (tier.size - 1)}
                      container
                      item
                      justifyContent="center"
                      alignItems="center"
                      md={12 / tier.size}
                      maxWidth="100%"
                      key={sponsor.name}
                      sx={{ pb: 4 }}
                    >
                      <Link href={sponsor.link} target="_blank">
                        <img
                          src={sponsor.img}
                          loading="lazy"
                          width="100%"
                          // style={{ maxWidth: "50vw" }}
                        ></img>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
