import React from "react";

import frc from "./img/first/frc.jpg";
import ftc from "./img/first/ftc.jpg";
import fll from "./img/first/fll.jpg";

type firstEntry = {
  ages: string;
  grades: string;
  link: string;
  img: string;
  heading: JSX.Element;
  para: JSX.Element;
};

export const firstSections: firstEntry[] = [
  {
    img: frc,
    ages: "14-18",
    grades: "9-12",
    link: "https://www.firstinspires.org/robotics/frc",
    heading: (
      <>
        <i>FIRST</i> Robotics Competition (FRC)
      </>
    ),
    para: (
      <>
        <i>FIRST</i> Robotics Competition teams design, program, and build a
        robot starting with a standard kit of parts and common set of rules to
        play in a themed head-to-head challenge. Teams also build a brand,
        develop community partnerships for support, and work to promote STEM in
        their local community.
      </>
    ),
  },
  {
    img: ftc,
    ages: "12-18",
    grades: "7-12",
    link: "https://www.firstinspires.org/robotics/ftc",
    heading: (
      <>
        <i>FIRST</i> Tech Challenge (FTC)
      </>
    ),
    para: (
      <>
        <i>FIRST</i> Tech Challenge students learn to think like engineers.
        Teams design, build, and program robots to compete in an alliance format
        against other teams. Robots are built from a reusable platform, powered
        by android technology, and can be coded using a variety of levels of
        Java-based programming.
      </>
    ),
  },
  {
    img: fll,
    ages: "4-16",
    grades: "PreK-8",
    link: "https://www.firstinspires.org/robotics/fll",
    heading: (
      <>
        <i>FIRST</i> LEGO League (FLL)
      </>
    ),
    para: (
      <>
        <i>FIRST</i> LEGO® League introduces STEM to children ages 4-16 through
        fun, exciting hands-on learning. Participants gain real-world
        problem-solving experiences through a guided, global robotics program,
        helping today's students and teachers build a better future together.
        <i>FIRST</i> LEGO League's three divisions inspire youth to experiment
        and grow their critical thinking, coding, and design skills through
        hands-on STEM learning and robotics.
      </>
    ),
  },
];
