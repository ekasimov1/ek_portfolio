import React from "react";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CodeIcon from "@mui/icons-material/Code";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import List from "@mui/material/List";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ClickAwayListener from "@mui/material/ClickAwayListener";

// Start Drawer menu

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "#1687A7",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "#1687A7",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  width: "80px",
});

const SideDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,

  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

// End Drawer menu

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleDrawerClose}>
      <Box>
        <AppBar
          open={open}
          style={{ background: "transparent", boxShadow: "none" }}
          sx={{
            display: { md: "none" },
          }}
        >
          <Toolbar
            sx={{
              position: "fixed",
              right: 0,
              paddingLeft: { xs: 0 },
              paddingRight: { xs: 2 },
              paddingTop: 2,
            }}
          >
            <IconButton aria-label="open drawer" onClick={handleDrawerOpen}>
              <MenuIcon style={{ fontSize: 40 }} />
            </IconButton>
          </Toolbar>
        </AppBar>

        <SideDrawer
          variant="permanent"
          open={open}
          onMouseOver={handleDrawerOpen}
          onMouseLeave={handleDrawerClose}
        >
          <DrawerHeader
            sx={{
              display: { md: "none" },
              position: "fixed",
              right: 0,
              padding: 0,
              paddingRight: 2,
              paddingTop: 2,
            }}
          >
            <IconButton onClick={handleDrawerClose}>
              <KeyboardArrowDownIcon
                style={{ fontSize: 40, color: "#F6F5F5" }}
              />
            </IconButton>
          </DrawerHeader>
          <Box>
            <Grid
              container
              direction="row"
              height="100vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <List onClick={handleDrawerClose}>
                {[
                  { text: "Home", icon: HomeOutlinedIcon, path: "#home" },
                  { text: "About", icon: PermIdentityIcon, path: "#about" },
                  { text: "Skills", icon: CodeIcon, path: "#skills" },
                  {
                    text: "Projects",
                    icon: WorkOutlineIcon,
                    path: "#projects",
                  },
                  { text: "Contact", icon: MailOutlineIcon, path: "#contact" },
                ].map((element, index) => (
                  <ListItem
                    button
                    key={element.text}
                    component="a"
                    href={element.path}
                  >
                    <ListItemIcon sx={{ minWidth: 35 }}>
                      <element.icon
                        style={{ fontSize: 35, color: "#F6F5F5" }}
                      />
                    </ListItemIcon>

                    <ListItemText
                      primary={open ? element.text : null}
                      style={{ color: "#F6F5F5" }}
                      primaryTypographyProps={{
                        ml: 3,
                        fontSize: 20,
                        fontWeight: "light",
                        letterSpacing: 0,
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Box>
        </SideDrawer>
      </Box>
    </ClickAwayListener>
  );
};

export default Drawer;
