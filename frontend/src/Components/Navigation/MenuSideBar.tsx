import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { NAVIGATION_ITEMS } from "./navigation.config";
import { useTheme } from "@mui/material";

const drawerWidth = 240;

function MenuSideBar() {
  const theme = useTheme();

  const navigate = useNavigate();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: theme.palette.secondary.main,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => navigate("/")}
      >
        <img
          src="/logosIconWithDescription.png"
          alt="Logos Verde"
          style={{ width: "95%" }}
        />
      </Box>
      <List>
        {NAVIGATION_ITEMS.map((link) => (
          <ListItem key={link.index} disablePadding>
            <ListItemButton onClick={() => navigate(link.link)}>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default MenuSideBar;
