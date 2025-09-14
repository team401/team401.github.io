"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { Divider, List, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

import RespImage from "./RespImage";
import logo from "../img/logo_white.png";

export type PageType = {
  path: string;
  title: string;
};

export default function TeamAppBar() {
  const pathname = usePathname();

  const pages: PageType[] = [
    { path: "/", title: "About Us" },
    { path: "/first", title: "About FIRST" },
    { path: "/involved", title: "Join Us" },
    { path: "/coalition", title: "Coalition" },
    { path: "/robots", title: "Robots" },
    { path: "/projects", title: "Projects" },
    { path: "/resources", title: "Resources" },
    { path: "/sponsors", title: "Sponsors" },
    { path: "/calendar", title: "Calendar" },
  ];

  const [open, setOpen] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(open);
    };

  const logoImage = <RespImage src={logo} sizes="80px" />;

  return (
    <AppBar position="fixed" style={{ background: "secondary" }}>
      <Container disableGutters maxWidth={false}>
        <Toolbar disableGutters>
          <Link href="/">
            <Box sx={{ display: { xs: "none", lg: "flex" }, paddingLeft: 2 }}>
              {logoImage}
            </Box>
          </Link>
          <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
            <List
              component="nav"
              onClick={toggleDrawer(false)}
              sx={{ minWidth: 200 }}
            >
              {pages.map((page) => (
                <Box key={page.title}>
                  <Link href={page.path} style={{ textDecoration: "none" }}>
                    <ListItemButton>
                      <ListItemText
                        primary={page.title}
                        primaryTypographyProps={{
                          fontSize: 18,
                          fontWeight: page.path == pathname ? "800" : "",
                          color: "text.secondary",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Divider />
                </Box>
              ))}
            </List>
          </Drawer>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              aria-label="open menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Link href="/">
            <Box sx={{ display: { xs: "flex", lg: "none" } }}>{logoImage}</Box>
          </Link>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", lg: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
            {pages.map((page) => (
              <Box key={page.path}>
                {page.path === "/" ? null : (
                  <Link href={page.path} style={{ textDecoration: "none" }}>
                    <Button
                      onClick={toggleDrawer(false)}
                      size="large"
                      sx={{
                        my: 0,
                        py: 0,
                        color: "white",
                        display: "block",
                        textAlign: "center",
                        fontWeight: page.path == pathname ? "800" : "",
                      }}
                    >
                      {page.title}
                    </Button>
                  </Link>
                )}
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export const AppBarMemo = React.memo(TeamAppBar);
