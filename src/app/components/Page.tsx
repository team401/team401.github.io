import { Container } from "@mui/material";
import React from "react";
import { PropsWithChildren } from "react";

export default function Page(props: PropsWithChildren<unknown>) {
  return (
    <Container maxWidth="lg" sx={{ pt: 4 }}>
      {props.children}
    </Container>
  );
}
