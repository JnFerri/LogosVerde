
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import {useNavigate } from 'react-router-dom';
import ForestIcon from '@mui/icons-material/Forest';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Box, Stack } from '@mui/material';
import type PlantingArea from '../Entities/PlantingArea';
import SunnyIcon from '@mui/icons-material/Sunny';

function CardsPlantingArea({ plantingAreas }: { plantingAreas : PlantingArea[] }) {
  const navigate = useNavigate()
  
  return (
    <>
      {plantingAreas.map((area) => (
        <Card 
          key={area.id} 
          sx={{
            height:'350px', 
            borderRadius: 4, 
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: 8,
            },
          }}
        >
          <CardActionArea
            onClick={() =>{
              navigate(`/projects/plantingAreas${area.id}`)} }
            sx={{ height: '100%' }}
          >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 0 }}>
              <Box 
                sx={{
                  background: 'linear-gradient(135deg, #6e9662 0%, #4a6343 100%)', 
                  width:'100%', 
                  height:'45%', 
                  flexDirection:'column', 
                  justifyContent:'center', 
                  alignItems:'center', 
                  display:'flex',
                  color: 'white'
                }}
              >
                <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '50%', p: 1.5, mb: 1 }}>
                  <ForestIcon sx={{ fontSize: 40 }} />
                </Box>
                <Typography variant="h5" sx={{ textAlign:'center', fontWeight: 'bold', px: 2 }}>
                  {area.name}
                </Typography>
              </Box>
              
              <Box 
                sx={{
                  display:'flex', 
                  flexDirection:'column', 
                  justifyContent:'center', 
                  height:'55%', 
                  backgroundColor:'#f7f0e4',
                  px: 3
                }}
              >
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex',flexDirection:'column', alignItems: 'center', gap: 1.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <CalendarMonthIcon sx={{ color: '#8b5a2b', fontSize: 20 }} />
                    <Typography variant="body2" color="text.secondary">
                      Criado em: {new Date(area.createdAt).toLocaleDateString('PT-br')}
                    </Typography>
                    </Box>
                    <Box  sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <SunnyIcon/>
                    <Typography variant="body2" color="text.secondary">
                      Horas de Sol: {area.sunshineHours ? area.sunshineHours : 'N/A'}
                    </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}

export default CardsPlantingArea;