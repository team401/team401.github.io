import React from "react";

import pointing from "./img/about/pointing.png";
import fabrication from "./img/involved/fabrication.jpg";
import design from "./img/involved/design.jpg";
import controls from "./img/involved/controls.jpg";
import outreach from "./img/involved/outreach.jpg";
import { Link } from "@mui/material";

type involvedEntry = {
  img: string;
  heading: string;
  para: JSX.Element;
  loading?: "eager" | "lazy" | undefined;
};

export const involvedSections: involvedEntry[] = [
  {
    img: pointing,
    heading: "Who can join Team 401?",
    para: (
      <>
        Our team is available to all Montgomery County High School students who
        have taken Robotics I, Manufacturing I, or AP Computer Science. If you
        have taken these and are interested, contact your teacher. Being a part
        of our team is an invaluable opportunity to learn skills that will carry
        students into their professional field of choice and can be the deciding
        factor in a job application.
        <br></br>
        Our team consists of four subteams, each with a different purpose.
      </>
    ),
    loading: "eager",
  },
  {
    img: fabrication,
    heading: "Fabrication",
    para: (
      <>
        Our fabrication subteam members are responsible for manufacturing every
        robot part and leverage a wide array of machines in the team shop.
        Fabrication team members use CNC routers, a high pressure abrasive
        waterjet, a CNC plasma cutter, multiple 3D printers, and a variety of
        manual machines including lathes, mills, and bandsaws to quickly and
        precisely prepare parts for each robot.
      </>
    ),
    loading: "eager",
  },
  {
    img: design,
    heading: "Design",
    para: (
      <>
        Our design subteam uses Onshape, an online CAD (Computer Aided Design)
        system, to design every part that goes into our robots. Every year we
        design, review, and revise hundreds of custom parts for every subsystem
        on our robots. We use Fusion 360 to generate CAM (Computer Aided
        Manufacturing) files that are used on our CNC machines. The design team
        also works closely with the fabrication team on prototyping robot
        mechanisms as we move through the engineering design process.
      </>
    ),
    loading: "lazy",
  },
  {
    img: controls,
    heading: "Controls",
    para: (
      <>
        The controls subteam handles programming and wiring all of our robots.
        We program in Java and make extensive use of the FRC{" "}
        <Link href="https://docs.wpilib.org/" target="_blank">
          WPIlib{" "}
        </Link>
        library. We try to emphasize advanced controls topics and work to
        advance our capabiliites, in 2023 we focused on path planning, AprilTag
        vision systems, and pose estimation. Aside from programming, controls
        team members are responsible for a variety of electrical tasks including
        soldering, updating firmwares, and diagnosing problems to make sure the
        robot is functional on the field.
      </>
    ),
    loading: "lazy",
  },
  {
    img: outreach,
    heading: "Outreach",
    para: (
      <>
        The outreach and awards team shows that our team is about more than
        robotics. We have an extensive outreach program to spread STEM
        enthusiasm and education throughout our community. This ranges from
        small, hands-on demonstrations to large-scale fairs and festivals. Our
        team annually applies for the Impact Award, the most prestigious award
        in FIRST. We are always looking for outstanding essayists and presenters
        to carry our team's legacy into the future.
      </>
    ),
    loading: "lazy",
  },
];
