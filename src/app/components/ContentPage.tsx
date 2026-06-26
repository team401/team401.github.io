import { Box } from "@mui/material";
import type { PropsWithChildren } from "react";

import Page from "./Page";

export default function ContentPage(props: PropsWithChildren<unknown>) {
  return (
    <Page>
      <Box
        component="article"
        sx={{
          color: "text.secondary",
          "& > :first-child": { mt: 0 },
          "& > :last-child": { mb: 0 },
        }}
      >
        {props.children}
      </Box>
    </Page>
  );
}
