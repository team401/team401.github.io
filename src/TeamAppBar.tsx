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
import { List, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "./img/logo_white.png";
import { PageType } from "./App";

function TeamAppBar(props: { pages: PageType[] }) {
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

  const logoImage = (
    <img
      src={logo}
      style={{
        maxHeight: 40,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 0,
        padding: 0,
      }}
    ></img>
  );

  return (
    <AppBar position="fixed">
      <Container disableGutters maxWidth={false}>
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, paddingLeft: 2 }}>
            {logoImage}
          </Box>
          <Drawer
            anchor="left"
            open={open}
            onClose={toggleDrawer(false)}
            sx={{ minWidth: 100 }}
          >
            <List component="nav" onClick={toggleDrawer(false)}>
              {props.pages.map((page) => (
                <ListItemButton
                  component={Link}
                  to={page.path}
                  key={page.title}
                >
                  <ListItemText primary={page.title} />
                </ListItemButton>
              ))}
            </List>
          </Drawer>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
          <Box sx={{ display: { xs: "flex", md: "none" } }}>{logoImage}</Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {props.pages.map((page) => (
              <Button
                component={Link}
                to={page.path}
                key={page.title}
                onClick={toggleDrawer(false)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TeamAppBar;
