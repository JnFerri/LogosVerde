import { Box, Typography, useTheme } from "@mui/material";
import type Plant from "../Entities/Plant";

const InfoPlant = ({ plant }: { plant: Plant }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 1,
        p: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.primary,
            fontWeight: "bold",
          }}
        >
          Dicas de Manejo:
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.primary,
          }}
        >
          {plant && plant.managementDescription}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.primary,
            fontWeight: "bold",
          }}
        >
          Dicas de Plantio:
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.primary,
          }}
        >
          {plant && plant.plantingDescription}
        </Typography>
      </Box>
    </Box>
  );
};
export default InfoPlant;
