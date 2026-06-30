import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { NAVIGATION_ITEMS } from "./navigation.config";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";

const MobileBottomNav = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1000 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels={false}
        onChange={(_, newValue) => {
          navigate(NAVIGATION_ITEMS[newValue].link);
        }}
        sx={{ backgroundColor: theme.palette.background.default }}
      >
        {NAVIGATION_ITEMS.map((link) => (
          <BottomNavigationAction key={link.index} icon={link.icon} />
        ))}
      </BottomNavigation>
    </Paper>
  );
};
export default MobileBottomNav;
