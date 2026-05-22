import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardsHomePage from '../Components/CardsHomePage/CardsHomePage';



export default function HomePage() {
  
    


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center',width: {md:'80%', sm:'90%'}, height: '100%', overflow:'auto', margin:'10px' }}>
        
        <img src="/logosIconWithDescription.png" alt="Logos Verde" className='sm:w-[100%] md:w-[70%] h-auto p-2'/>
        
        <Typography sx={{ margin:'10px 0' }}>
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
      </Box>
  );
}
