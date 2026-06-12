
import { Box, Card, CardContent, Typography } from "@mui/material";

import type Plant from "../Entities/Plant";
import { usePlantIcons } from "../Hooks/usePlantsIcons";

interface CardsPlantProps {
  plants: Plant[];
}

export default function CardsPlant({ plants }: CardsPlantProps) {
  const PlantIcons = usePlantIcons();

  return (
    <Box
      sx={{
        display: 'grid',
        width: '100%',
        gridTemplateColumns: {
          xs: 'repeat(auto-fit, minmax(240px, 1fr))',
          md: 'repeat(auto-fit, minmax(350px, 5fr))',
        },
        gap: 2,
        p: 1,
      }}
    >
      {plants.length === 0 || !PlantIcons ? (
        <Typography variant="h6" sx={{ gridColumn: '1 / -1', textAlign: 'center', mt: 4 }}>
          Nenhuma planta encontrada.
        </Typography>
      ) : (
        plants.map((plant) => {
          console.log(
            plant,
    plant.plantIconName,
    PlantIcons.find((icon) => icon.name === plant.plantIconName)
  )
  return (
          <Card key={plant.id} sx={{backgroundColor:'#f7f0e4'}}>
            <CardContent
            sx={{ display: 'flex', flexDirection: 'row' ,justifyContent: 'space-between', gap:1 }}>
              <Box
                component='img'
                src={PlantIcons?.find((icon) => icon.name === plant.plantIconName)?.src || ''}
                alt={plant.plantIconName}
                sx={{
                  width:'25%'
                }}
              >
              </Box>
              <Box sx={{ display: 'flex',flexDirection:'column', justifyContent: 'space-between', height: '100%', width:'75%'}}>
              <Typography variant="h6" component="div">{plant.name.toLocaleUpperCase()}</Typography>
              <Typography variant="body2" color="text.secondary">{plant.scientificName.toLocaleUpperCase()}</Typography>
              <Box sx={{
                fisplay:'flex',
                flexWrap:'wrap',
                justifyContent:'space-between',
                width:'100%',
                gap:1
              }}>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:'12px', color:'gray'}}>Ph-Min: {plant.phMin}</Typography>
              <Typography variant="body2" color="text.secondary"sx={{fontSize:'12px', color:'gray'}}>Ph-Max: {plant.phMax}</Typography>
              <Typography variant="body2" color="text.secondary"sx={{fontSize:'12px', color:'gray'}}>Dias-Colheita: {plant.harvestMaxDays}</Typography>
              </Box>
              </Box> 
            </CardContent>
          </Card>
        )})
      )}
    </Box>
  );
}