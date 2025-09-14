import type { Metadata } from "next";
import * as React from "react";
import { Suspense } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import AppBarMemo from "./components/TeamAppBar";
import ScrollToTop from "./components/ScrollToTop";
import FooterMemo from "./components/Footer";
import theme from "./theme";

export const metadata: Metadata = {
  title: "FRC Team 401",
  description: "Copperhead Robotics: FRC Team 401",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBarMemo />
            <ScrollToTop />
            <Box sx={{ height: "5vh" }}></Box>
            <Suspense fallback={<div style={{ height: "100vh" }}></div>}>
              {children}
            </Suspense>
            <FooterMemo />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
