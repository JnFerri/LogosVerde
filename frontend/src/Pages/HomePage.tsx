import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardsHomePage from '../Components/CardsHomePage/CardsHomePage';



export default function HomePage() {
  
  
  return (
    <>
       <Box
        component="img"
        src="/logosIconWithDescription.png"
        alt="Logos Verde"
        sx={{
          width: {
            xs: '100%',
            md: '70%',
          },
          height: 'auto',
          mb: 2,
        }}
      />
        
        <Typography sx={{ mb:'10px 0' }}>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        <CardsHomePage/>
      </>
  );
}
