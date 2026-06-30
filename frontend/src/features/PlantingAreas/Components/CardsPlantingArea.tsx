import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box, Stack, useTheme } from "@mui/material";
import type PlantingArea from "../Entities/PlantingArea";
import SunnyIcon from "@mui/icons-material/Sunny";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
function CardsPlantingArea({
  plantingAreas,
}: {
  plantingAreas: PlantingArea[];
}) {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <>
      {plantingAreas.map((area) => (
        <Card
          key={area.id}
          sx={{
            height: "350px",
            borderRadius: 4,
            transition:
              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: 8,
            },
          }}
        >
          <CardActionArea
            onClick={() => {
              navigate(`/projects/${area.projectId}/plantingAreas/${area.id}`);
            }}
            sx={{ height: "100%" }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                p: 0,
              }}
            >
              <Box
                sx={{
                  background: theme.palette.background.linearGreen,
                  width: "100%",
                  height: "45%",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  color: theme.palette.text.primary,
                }}
              >
                <Box
                  sx={{
                    backgroundColor: theme.palette.background.green,
                    borderRadius: "50%",
                    p: 1.5,
                    mb: 1,
                  }}
                >
                  <LocalFloristIcon
                    sx={{ color: theme.palette.background.paper }}
                  />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    px: 2,
                    color: theme.palette.text.secondary,
                  }}
                >
                  {area.name}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "55%",
                  backgroundColor: theme.palette.background.cream,
                  px: 3,
                }}
              >
                <Stack spacing={2}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 1.5,
                    }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                    >
                      <CalendarMonthIcon
                        sx={{ color: theme.palette.secondary.main }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.text.primary }}
                      >
                        Criado em:{" "}
                        {new Date(area.createdAt).toLocaleDateString("PT-br")}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                    >
                      <SunnyIcon sx={{ color: theme.palette.secondary.main }} />
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.text.primary }}
                      >
                        Horas de Sol:{" "}
                        {area.sunshineHours ? area.sunshineHours : "N/A"}
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
