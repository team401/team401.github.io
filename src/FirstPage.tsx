import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

class programDetails {
  name: string;
  color: string;
  link: string;
  logo: string;
  description: string;

  constructor(
    name: string,
    color: string,
    link: string,
    logo: string,
    description: string
  ) {
    this.name = name;
    this.color = color;
    this.link = link;
    this.logo = logo;
    this.description = description;
  }
}

const firstPrograms: programDetails[] = [];

export default function AboutFirst() {
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ paddingTop: 3 }}>
        <Box sx={{ bgcolor: "background.paper", p: 1 }} component="footer">
          About FIRST
        </Box>
      </Container>
    </>
  );
}
