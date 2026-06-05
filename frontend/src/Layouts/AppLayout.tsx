import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@mui/material';

import MobileBottomNav from '../Components/Navigation/MobileBottomNav';
import MenuSideBar from '../Components/Navigation/MenuSideBar';



const DRAWER_WIDTH = 240;
const MOBILE_NAV_HEIGHT = 64;

export default function AppLayout() {
  const theme = useTheme();

  const isMobile = useMediaQuery(
    theme.breakpoints.down('md')
  );

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100dvh',
        backgroundColor: '#f5f5f5',
      }}
    >
      {/* Sidebar Desktop */}
      {!isMobile && (
        <Box
          sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,
          }}
        >
          <MenuSideBar />
        </Box>
      )}

      {/* Conteúdo principal */}
      <Box
        component="main"
        sx={{
          flex: 1,

          display: 'flex',
          justifyContent: 'center',

          overflowY: 'auto',

          pb: {
            xs: `calc(${MOBILE_NAV_HEIGHT}px + 24px)`,
            md: '24px',
          },
        }}
      >
        {/* Container interno das páginas */}
        <Box
          sx={{
            width: '100%',

            maxWidth: '100%',

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Outlet />
        </Box>
      </Box>

      {/* Bottom Navigation Mobile */}
      {isMobile && (
        <Box
          sx={{
            position: 'fixed',

            bottom: 0,
            left: 0,
            right: 0,

            zIndex: 1200,

            height: MOBILE_NAV_HEIGHT,

            display: {
              xs: 'block',
              md: 'none',
            },
          }}
        >
          <MobileBottomNav />
        </Box>
      )}
    </Box>
  );
}