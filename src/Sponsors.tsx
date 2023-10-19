import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Sponsors() {
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ paddingTop: 3 }}>
        <Box sx={{ bgcolor: "background.paper", p: 1 }} component="footer">
          Sponsors
        </Box>
      </Container>
    </>
  );
}
