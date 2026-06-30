import { Box, Container, Grid, Modal, useTheme } from "@mui/material";
import { useState } from "react";
import PageHeader from "../../../Components/Navigation/PageHeader";
import type { HeaderActions } from "../../../Interface/PageHeader/HeaderActions";
import { useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { usePlantingArea } from "../Hooks/usePlantingArea";
import FormCreatePlantingArea from "../Components/FormCreatePlantingArea";
import SectionDragAndDrop from "../Components/SectionDragAndDrop";
import ListPlants from "../Components/ListPlants";
import SectionPlantsSelected from "../Components/SectionPlantsSelected";

const PlantingAreaPage = () => {
  const { plantingAreaId } = useParams();
  const theme = useTheme();
  const { data: plantingAreaData, isLoading: plantAreaIsLoading } =
    usePlantingArea(Number(plantingAreaId));
  const [IsOpenModal, setIsOpenModal] = useState(false);
  const [typeForm, setTypeForm] = useState("");

  const breadcrumbs = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Areas de Plantio",
      path: plantAreaIsLoading ? "" : `/project/${plantingAreaData.projectId}`,
    },
    {
      label: plantAreaIsLoading ? "" : plantingAreaData.name,
      path: plantAreaIsLoading ? "" : `/plantingAreas/${plantingAreaData.id}`,
    },
  ];

  const headerActions: HeaderActions[] = [
    {
      description: "Atualizar Area de Plantio",
      icon: <EditIcon />,
      onClick: () => {
        setIsOpenModal(true);
        setTypeForm("update");
      },
    },
  ];

  return plantAreaIsLoading ? (
    <div>Carregando...</div>
  ) : (
    <>
      <PageHeader
        title={`Area de Plantio - ${plantingAreaData.name}`}
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
              <FormCreatePlantingArea
                projectId={plantingAreaData.projectId}
                plantingAreaId={plantingAreaData.id}
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
              <SectionDragAndDrop />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <ListPlants />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <SectionPlantsSelected />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PlantingAreaPage;
