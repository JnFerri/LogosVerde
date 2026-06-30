import { Box, Button, useTheme } from "@mui/material";

export type navBarInfoSectionProps = {
  SectionSelectedId: number;
  setSectionSelectedId: (id: number) => void;
  PlantSections: {
    id: number;
    name: string;
    icon: React.ReactElement;
  }[];
};

const NavBarInfoSection = ({
  SectionSelectedId,
  setSectionSelectedId,
  PlantSections,
}: navBarInfoSectionProps) => {
  const theme = useTheme();
  const firstId = PlantSections[0].id;
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        minHeight: "50px",
        p: 0.1,
        justifyContent: "flex-start",
        alignItems: "left",
        backgroundColor: theme.palette.background.default,
        borderTopLeftRadius: "0.5rem",
        borderTopRightRadius: "0.5rem",
      }}
      component="div"
    >
      {PlantSections.map((section) => (
        <Box key={section.id}>
          <Button
            onClick={() => setSectionSelectedId(section.id)}
            startIcon={section.icon}
            variant={"contained"}
            size="medium"
            sx={{
              background:
                SectionSelectedId === section.id
                  ? theme.palette.background.linearGreen
                  : theme.palette.background.paper,
              color:
                SectionSelectedId === section.id
                  ? theme.palette.text.secondary
                  : theme.palette.text.primary,
              border: `1px solid ${theme.palette.divider}`,
              borderTopLeftRadius: section.id === firstId ? "0.5rem" : "0",
              height: "100%",
            }}
          >
            {section.name}
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default NavBarInfoSection;
