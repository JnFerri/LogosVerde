import { Box, useTheme } from "@mui/material";
import { usePlants } from "../../Plants/Hooks/usePlants";
import CardsPlant from "../../Plants/Components/CardsPlant";
import { useState } from "react";
import type Plant from "../../Plants/Entities/Plant";

const ListPlants = () => {
  const theme = useTheme();
  const { data, isLoading } = usePlants();

  const [listPlantSelected, setListPlantSelected] = useState<Plant[]>([]);

  const selectPlantList = (id: number) => {
    const plant = data.find((plant: Plant) => plant.id === id);
    if (!plant) return;
    setListPlantSelected([...listPlantSelected, plant]);
  };

  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        height: "40vh",
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[3],
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "0.5rem",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <CardsPlant plants={data} onClick={selectPlantList} />
      )}
    </Box>
  );
};

export default ListPlants;
