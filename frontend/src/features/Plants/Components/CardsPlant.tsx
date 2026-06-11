
import { Box, Card, CardContent, Typography } from "@mui/material";

import type Plant from "../Entities/Plant";

interface CardsPlantProps {
  plants: Plant[];
}

export default function CardsPlant({ plants }: CardsPlantProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        width: '100%',
        gridTemplateColumns: {
          xs: 'repeat(auto-fit, minmax(240px, 1fr))',
          md: 'repeat(auto-fit, minmax(300px, 1fr))',
        },
        gap: 2,
        p: 1,
      }}
    >
      {plants.length === 0 ? (
        <Typography variant="h6" sx={{ gridColumn: '1 / -1', textAlign: 'center', mt: 4 }}>
          Nenhuma planta encontrada.
        </Typography>
      ) : (
        plants.map((plant) => (
          <Card key={plant.id} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <CardContent>
              <Typography variant="h6" component="div">{plant.name}</Typography>
              <Typography variant="body2" color="text.secondary">Nome Científico: {plant.scientificName}</Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
}