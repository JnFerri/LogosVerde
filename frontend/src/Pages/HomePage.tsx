import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardsHomePage from '../Components/CardsHomePage/CardsHomePage';
import { useState } from 'react';
import { Modal } from '@mui/material';
import FormCreateProject from '../features/Projects/Components/FormCreatePorject';




export default function HomePage() {
  const [IsOpenModal, setIsOpenModal] = useState(false)
  const isOpenModal = () =>{
    setIsOpenModal(true)
  }
  
  
  return (
    
  <>
    {IsOpenModal && 
      
      <Modal open={IsOpenModal} onClose={() => setIsOpenModal(false)} sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Box sx={{width:'80%', height:'40%', backgroundColor:'white'}}>
        <FormCreateProject setIsOpenModal={setIsOpenModal}/>

        </Box>
      </Modal>
}
      
      
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
        <CardsHomePage isOpenModal={isOpenModal}/>
      </>
  );
}
