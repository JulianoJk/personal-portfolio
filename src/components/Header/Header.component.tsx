import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { IconMenu2 } from "@tabler/icons-react";

import TestIDs from "../TestID";
import LanguagesMenu from "./ChangeLanguage/LanguagesMenu.component";
import PlaygroundSpeedDial from "./ChangeLanguage/LanguageSelector";
import { useAppState } from "../../context/AppContext";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const DrawerAppBar: React.FC<Props> = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { lang } = useAppState();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const navItems = [
    { name: lang === "EN" ? "Home" : "Startseite", path: TestIDs.home },
    { name: lang === "EN" ? "About" : "Über", path: TestIDs.about },
    { name: lang === "EN" ? "Projects" : "Projekte", path: TestIDs.projects },
  ];

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#95A1F9" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Juliano Jika
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => scrollToSection(item.path)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", overflowX: "hidden" }}>
      <AppBar component="nav" sx={{ backgroundColor: "#95A1F9" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <IconMenu2 />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Juliano Jika
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 2,
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.name}
                sx={{ color: "#fff" }}
                onClick={() => scrollToSection(item.path)}
              >
                {item.name}
              </Button>
            ))}
          </Box>
          {/* Language section will always appear here in both mobile and desktop view */}
          <Box
            sx={{ display: "flex", gap: 1, alignItems: "center", ml: "auto" }}
          >
            <LanguagesMenu />
            <PlaygroundSpeedDial />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#5C6BC0",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default DrawerAppBar;
