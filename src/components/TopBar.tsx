import { Link } from "react-router-dom";
import Logo from "../assets/LOGO.png";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import "../styles/TopBar.css";

const TopBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const menuItems = [
    { text: "Pricing", link: "#pricing" },
    { text: "About us", link: "#about" },
    { text: "Contact", link: "#contact" },
    { text: "FAQ", link: "#FAQ" },
    { text: "Get started", link: "#get-started", className: "get-started" },
  ];

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} component={Link} to={item.link}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={Logo} alt="Logo" style={{ height: 60 }} />
          <Typography className="brand" component={Link} to="/">
            TradeMate
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 5 }}>
          {menuItems.slice(0, 4).map((item, index) => (
            <Button
              key={index}
              className="buttons"
              component={Link}
              to={item.link}
            >
              {item.text}
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexGrow: 1,
            justifyContent: "flex-end",
          }}
        >
          <IconButton color="inherit">
            <LanguageIcon sx={{ fontSize: 24 }} />
            <Typography sx={{ ml: 1, fontSize: 16 }}>EN</Typography>
          </IconButton>
          <IconButton color="inherit">
            <PersonIcon sx={{ fontSize: 30, mr: 2, ml: 1 }} />
          </IconButton>
          <Button className="get-started" component={Link} to="#get-started">
            Get started
          </Button>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default TopBar;
