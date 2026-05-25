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
        
        <Typography  sx={{ mb:'10px'}}>
          Este sistema foi desenvolvido para auxiliar produtores rurais, técnicos e gestores no planejamento, acompanhamento e gerenciamento de áreas de cultivo, desde pequenas hortas familiares até grandes projetos agroflorestais.
        </Typography>
        <CardsHomePage/>
      </>
  );
}
