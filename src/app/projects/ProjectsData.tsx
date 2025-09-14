import * as React from "react";

import grasshopper from "../img/projects/GrasshopperNuts.png";
import batteryCart from "../img/projects/BatteryCart.png";
import driverStation from "../img/projects/DriverStation.png";
import bBot from "../img/projects/2023BBot.png";
import swerveCover from "../img/projects/MK4iCover.png";
import wiringClip from "../img/projects/WiringClip.png";
import combined from "../img/projects/combined.png";
import { StaticImageData } from "next/image";

type projectDetails = {
  img: StaticImageData;
  title: string;
  para: React.ReactNode | string;
  loading?: "eager" | "lazy" | undefined;
  link: string;
};

export const projects: projectDetails[] = [
  {
    img: combined,
    title: "Combined Electronics",
    para: (
      <>
        Developed for the 2025 FRC season this combined electrical enclosure is
        a 3D printed housing for a roboRIO, a CANivore, a Pigeon 2.0 IMU, and a{" "}
        <i>REV</i> Mini Power Module. The combined electrical package provides
        two layers of swarf protection for all unused IO ports, converts all
        used ports into latching polarized Molex SL connections, and provides 15
        cable tie slots for strain relieving IO wires. Each corner features
        modular, indexable cable tie attachment inserts.
      </>
    ),
    loading: "eager",
    link: "https://cad.onshape.com/documents/ab765f16e2cb17b316b39f19/w/04844148f83fd4607f7aa410/e/37a362848ba7d9741a14a2ab",
  },
  {
    img: bBot,
    title: "2023 Offseason Robot",
    para: (
      <>
        Built in the fall of 2023 as a training exercise our offseason robot
        launched inflated cubes into three different scoring locations. This
        robot was used to test new wheel options for our swerve drives and new
        gearing options. The offseaon bot competed at the 2023 Blue Ridge Brawl
        and the 2023 Rumble in the Roads offseason events and let Team 401
        students experience more competition roles.
      </>
    ),
    loading: "eager",
    link: "https://cad.onshape.com/documents/12d8f66c7a373030daac1daa/w/89c93577ff5faa17bca07274/e/e56bb678febe34e0528344c3?renderMode=0&uiState=65511d5fac7b1276ebde5c0d",
  },
  {
    img: grasshopper,
    title: "Grasshopper Nuts",
    para: (
      <>
        Grasshopper Nuts were developed by FRC Team 95: The Grasshoppers as an
        improvement to using Nordlock washers on FRC battery connections.
        Grasshopper nuts make battery terminal connections a single tool
        operation and help ensure the best possible mechanical and electrical
        battery connection. In our testing we have found that batteries will
        break before Grasshopper Nuts ever loosen. Team 401 organized, updated,
        and published the CAD models for the Grasshopper Nuts and the forming
        tools that are used by teams around the world.
      </>
    ),
    loading: "eager",
    link: "https://cad.onshape.com/documents/ebdc52ac50fc82c0d5bd70de/w/7c57a5df41c9b5045dde372c/e/91108ce4d7067995ade83a20",
  },
  {
    img: driverStation,
    title: "Driver Station",
    para: (
      <>
        Our custom driver station design is a combination of CNC cut aluminum
        box tubing and lightweight ABS and HDPE plastic sheets. The driver
        station features a detachable heads up display for helping operators,
        LEDs for signaling, and uses a USB hub to manage all computer
        peripherals.
      </>
    ),
    loading: "lazy",
    link: "https://cad.onshape.com/documents/abd64c801823388f64d86634/w/93f6ec997c496376ca728d14/e/f3c67764a38adf806e8ffff7",
  },
  {
    img: batteryCart,
    title: "Battery Cart",
    para: (
      <>
        Our battery cart project used a purchased hand truck that we heavily
        modified. This project let team members build experience in plasma
        cutting, sheet metal forming on a brake, and MIG welding. This battery
        cart design allows any team member to easily and safely transport over
        200 pounds of batteries and chargers and minimizes floor space used at
        competition.
      </>
    ),
    loading: "lazy",
    link: "https://cad.onshape.com/documents/d5602ae4afdde5d5ffd81c22/w/2076253168e6d40c4eb172c5/e/69161274032a34dacde48c0f",
  },
  {
    img: swerveCover,
    title: "Mk4i Swerve Cover",
    para: (
      <>
        Our Mk4i swerve module cover protects our swerve modules from the
        ingress of any swarf or debries and ensures that grease stays contained
        in our swerve modules. The design features retention snaps that engage
        with the bottom of the Mk4i top plate making installation and removal
        fully toolless. The design also features a wire routing channel was to
        improve cable management and protect wiring, and CAN ID labels that can
        be printed into each module using our multi-material capable Bambu 3D
        printers.
      </>
    ),
    loading: "lazy",
    link: "https://cad.onshape.com/documents/abd64c801823388f64d86634/w/93f6ec997c496376ca728d14/e/f3c67764a38adf806e8ffff7",
  },
  {
    img: wiringClip,
    title: "Configurable Wiring Clip",
    para: (
      <>
        This configurable wiring clip was a small project developed for our 2023
        robot to constrain wires in a reusable manner. Each clip is embossed
        with its internal size and the design can be rapidly updated to
        accomodate other wire sizes. We&apos;ve used magnets, dual lock, and VHB
        to affix these wiring clips to our robots.
      </>
    ),
    loading: "lazy",
    link: "https://cad.onshape.com/documents/30c5c778ba9b94727bf6ea5a/w/ee5cebdb079ae485af54dcdc/e/b6d8e212d920f60b228c6015",
  },
];
