import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { NAVIGATION_ITEMS } from './navigation.config';
import { useNavigate } from 'react-router-dom';

 const MobileBottomNav= () => {
  const navigate = useNavigate();

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }} elevation={3}>
      <BottomNavigation
        showLabels={false}
        onChange={(_, newValue) => {
          navigate(NAVIGATION_ITEMS[newValue].link);
        }}
        sx={{ backgroundColor: '#d6b696' }}
      >
        {NAVIGATION_ITEMS.map((link) => (
          <BottomNavigationAction key={link.index} icon={link.icon} />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
export default MobileBottomNav;