import { Box, Container, Grid, Modal, useTheme } from "@mui/material";
import { useState } from "react";
import PageHeader from "../../../Components/Navigation/PageHeader";
import type { HeaderActions } from "../../../Interface/PageHeader/HeaderActions";
import FormCreatePlant from "../Components/FormCreatePlant";
import { usePlant } from "../Hooks/usePlant";
import { useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DashBoardPlant from "../Components/DashBoardPlant";
import PlantInfoSection from "../Components/PlantInfoSection";
import PlantingAreaPlantSection from "../Components/PlantingAreaPlantsSection";

const PlantPage = () => {
  const { plantId } = useParams();
  const theme = useTheme();
  const { data: plantData, isLoading: plantIsLoading } = usePlant(
    Number(plantId),
  );
  const [typeForm, setTypeForm] = useState("");
  const [IsOpenModal, setIsOpenModal] = useState(false);

  const breadcrumbs = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Plantas",
      path: "/plants",
    },
    {
      label: plantIsLoading ? "" : plantData.name,
      path: plantIsLoading ? "" : `/plants/${plantData.id}`,
    },
  ];

  const headerActions: HeaderActions[] = [
    {
      description: "Atualizar Planta",
      icon: <EditIcon />,
      onClick: () => {
        setIsOpenModal(true);
        setTypeForm("update");
      },
    },
  ];

  return (
    <>
      <PageHeader
        title="Plantas"
        actions={headerActions}
        breadcrumbs={breadcrumbs}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          p: 2,
          gap: 2,
        }}
      >
        {IsOpenModal && (
          <Modal
            open={IsOpenModal}
            onClose={() => {
              setIsOpenModal(false);
              setTypeForm("");
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "80%",
                height: "auto",
                maxWidth: "700px",
                overflow: "auto",
                minheight: "40%",
                maxHeight: "80vh",
                backgroundColor: theme.palette.background.cream,
                borderRadius: 2,
              }}
            >
              <FormCreatePlant
                setIsOpenModal={setIsOpenModal}
                typeForm={typeForm}
                setTypeForm={setTypeForm}
              />
            </Box>
          </Modal>
        )}
        <Container maxWidth={false} sx={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <DashBoardPlant plant={plantData} />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <PlantInfoSection plant={plantData} />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <PlantingAreaPlantSection />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PlantPage;
