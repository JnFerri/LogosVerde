import { Box, Typography, useTheme } from "@mui/material";

const PlantingAreaPlantSection = () => {
  const theme = useTheme();
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        minHeight: "65vh",
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        boxShadow: theme.shadows[3],
        justifyContent: "space-between",
        borderRadius: "0.5rem",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: "50px",
          p: 1,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "left",
          backgroundColor: theme.palette.background.default,
          borderTopLeftRadius: "0.5rem",
          borderTopRightRadius: "0.5rem",
        }}
        component="div"
      >
        <Typography variant="h5" sx={{ color: theme.palette.text.secondary }}>
          Areas de Plantio
        </Typography>
      </Box>
    </Box>
  );
};

export default PlantingAreaPlantSection;
