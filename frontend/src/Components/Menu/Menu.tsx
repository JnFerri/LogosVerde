import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import YardIcon from '@mui/icons-material/Yard';
import ForestIcon from '@mui/icons-material/Forest';
import PestControlIcon from '@mui/icons-material/PestControl';
import EngineeringIcon from '@mui/icons-material/Engineering';
import Box from '@mui/material/Box';
import { useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

export default function Menu() {
  
    const MenuLinks = [
    {
        index: 0,
        text: 'Projetos',
        icon: <YardIcon /> ,
        link: '/projects'    
    },
    { 
        index: 1,
        text: 'Plantas',
        icon: <ForestIcon />,
        link: '/plants'
    },
    { 
        index: 2,
        text: 'Pestes e Doenças',
        icon: <PestControlIcon />,
        link: '/pests-diseases'
    },
    { 
        index: 3,
        text: 'Configurações', 
        icon: <EngineeringIcon />,
        link: '/settings'
    },
    ]
    
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();

    

  if (!isMobile) {
    return (
    
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
              backgroundColor: '#d6b696',
          },
          
        }}
        variant="permanent"
        anchor="left"
      > 
        <Box sx={{ width: '100%', height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick = {() => navigate('/')}>
            <img src="/logosIconWithDescription.png" alt="Logos Verde" style={{ width: '95%' }} />
        </Box>
        <List >
          {MenuLinks.map((link) => (
            <ListItem  key={link.index} disablePadding>
              <ListItemButton onClick={() => navigate(link.link)}>
                <ListItemIcon>
                  {link.icon}
                </ListItemIcon>
                <ListItemText primary={link.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  }

  // Versão Mobile: Menu Inferior
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }} elevation={3}>
      <BottomNavigation
        showLabels={false}
        onChange={(_, newValue) => {
          navigate(MenuLinks[newValue].link);
        }}
        sx={{ backgroundColor: '#d6b696' }}
      >
        {MenuLinks.map((link) => (
          <BottomNavigationAction key={link.index} icon={link.icon} />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
