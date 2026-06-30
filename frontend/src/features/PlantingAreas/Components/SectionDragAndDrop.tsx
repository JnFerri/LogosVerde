import { Box, useTheme } from "@mui/material";

const SectionDragAndDrop = () => {
  const theme = useTheme();
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        minHeight: "50vh",
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[3],
      }}
    ></Box>
  );
};

export default SectionDragAndDrop;
