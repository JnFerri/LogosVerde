import { Box, useTheme } from "@mui/material";
import NavBarInfoSection from "./NavBarInfoSection";
import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import PestControlIcon from "@mui/icons-material/PestControl";
import type Plant from "../Entities/Plant";
import InfoPlant from "./InfoPlant";

const PlantInfoSection = ({ plant }: { plant: Plant }) => {
  const theme = useTheme();
  const [SectionSelectedId, setSectionSelectedId] = useState(1);

  const PlantSections = [
    {
      id: 1,
      name: "Informações",
      icon: <InfoIcon />,
    },
    {
      id: 2,
      name: "Consórcios",
      icon: <GroupWorkIcon />,
    },
    {
      id: 3,
      name: "Doenças e Pestes",
      icon: <PestControlIcon />,
    },
  ];
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        minHeight: "65vh",
        backgroundColor: theme.palette.background.cream,
        boxShadow: theme.shadows[3],
        display: "flex",
        justifyContent: "flex-start",
        borderRadius: "0.5rem",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <NavBarInfoSection
        PlantSections={PlantSections}
        SectionSelectedId={SectionSelectedId}
        setSectionSelectedId={setSectionSelectedId}
      />
      {SectionSelectedId === 1 && <InfoPlant plant={plant} />}
    </Box>
  );
};

export default PlantInfoSection;
