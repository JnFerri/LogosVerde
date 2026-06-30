import { Box, useTheme } from "@mui/material";

const SectionPlantsSelected = () => {
  const theme = useTheme();
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        minHeight: "40vh",
        backgroundColor: theme.palette.background.cream,
        boxShadow: theme.shadows[3],
      }}
    ></Box>
  );
};

export default SectionPlantsSelected;
