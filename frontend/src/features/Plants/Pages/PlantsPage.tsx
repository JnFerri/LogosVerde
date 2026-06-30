import { Box, Modal, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useMemo, useState } from "react";
import PageHeader from "../../../Components/Navigation/PageHeader";
import type { SearchOption } from "../../../Interface/PageHeader/SearchOptions";
import type { HeaderActions } from "../../../Interface/PageHeader/HeaderActions";
import type Plant from "../Entities/Plant";
import { usePlants } from "../Hooks/usePlants";
import FormCreatePlant from "../Components/FormCreatePlant";
import CardsPlant from "../Components/CardsPlant";
import { useNavigate } from "react-router-dom";

const PlantsPage = () => {
  const { data, isLoading } = usePlants();
  const [typeForm, setTypeForm] = useState("");
  const [IsOpenModal, setIsOpenModal] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const theme = useTheme();
  const navigate = useNavigate();

  const navigationPagePlant = (id: number) => navigate(`/plants/${id}`);

  const searchOptions: SearchOption[] = [
    {
      label: "Nome",
      value: "name",
    },
    {
      label: "Nome Cientifico",
      value: "scientificName",
    },
  ];

  const breadcrumbs = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Plantas",
      path: "/plants",
    },
  ];

  const filteredData = useMemo(() => {
    if (!data) return [];

    const filters = {
      name: (plant: Plant, search: string) =>
        plant.name.toLowerCase().includes(search.toLowerCase()),

      scientificName: (plant: Plant, search: string) =>
        plant.scientificName.toLowerCase().includes(search.toLocaleLowerCase()),
    };

    const filterFn = filters[searchField as keyof typeof filters];

    if (!filterFn) {
      return data;
    }

    return data.filter((plant: Plant) => filterFn(plant, searchValue));
  }, [data, searchField, searchValue]);

  const headerActions: HeaderActions[] = [
    {
      description: "Criar Nova Planta",
      icon: <AddIcon />,
      onClick: () => {
        setIsOpenModal(true);
        setTypeForm("create");
      },
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <PageHeader
        title="Plantas"
        actions={headerActions}
        searchOptions={searchOptions}
        searchField={searchField}
        searchValue={searchValue}
        onSearchFieldChange={setSearchField}
        onSearchValueChange={setSearchValue}
        breadcrumbs={breadcrumbs}
      />
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

      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <CardsPlant plants={filteredData} onClick={navigationPagePlant} />
      )}
    </Box>
  );
};

export default PlantsPage;
