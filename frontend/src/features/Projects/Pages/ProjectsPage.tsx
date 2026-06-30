import { Box, Modal, useTheme } from "@mui/material";
import CardsProject from "../Components/CardsProject";
import { useProjectsWithAreaPlantings } from "../Hooks/useProjectsWithAreaPlantings";
import AddIcon from "@mui/icons-material/Add";
import { useMemo, useState } from "react";
import FormCreateProject from "../Components/FormCreatePorject";
import PageHeader from "../../../Components/Navigation/PageHeader";
import type { SearchOption } from "../../../Interface/PageHeader/SearchOptions";
import type Project from "../Entities/Project";
import type { HeaderActions } from "../../../Interface/PageHeader/HeaderActions";

const ProjectsPage = () => {
  const { data, isLoading } = useProjectsWithAreaPlantings();
  const [typeForm, setTypeForm] = useState("");
  const [IsOpenModal, setIsOpenModal] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const theme = useTheme();
  const searchOptions: SearchOption[] = [
    {
      label: "Nome",
      value: "name",
    },
    {
      label: "Data",
      value: "createdAt",
    },
  ];

  const breadcrumbs = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Projetos",
      path: "/projects",
    },
  ];

  const filteredData = useMemo(() => {
    if (!data) return [];

    const filters = {
      name: (project: Project, search: string) =>
        project.name.toLowerCase().includes(search.toLowerCase()),

      createdAt: (project: Project, search: string) =>
        new Date(project.createdAt)
          .toLocaleDateString("pt-BR")
          .includes(search),
    };

    const filterFn = filters[searchField as keyof typeof filters];

    if (!filterFn) {
      return data;
    }

    return data.filter((project: Project) => filterFn(project, searchValue));
  }, [data, searchField, searchValue]);

  const headerActions: HeaderActions[] = [
    {
      description: "Criar Novo Projeto",
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
        title="Projetos"
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
              maxWidth: "500px",
              minheight: "40%",
              backgroundColor: theme.palette.background.cream,
              borderRadius: 2,
            }}
          >
            <FormCreateProject
              setIsOpenModal={setIsOpenModal}
              typeForm={typeForm}
              setTypeForm={setTypeForm}
            />
          </Box>
        </Modal>
      )}
      <Box
        sx={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: {
            xs: "repeat(auto-fit, minmax(240px, 1fr))",
            md: "repeat(auto-fit, minmax(300px, 400pxfr))",
          },
          gap: 2,
          p: 1,
        }}
      >
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          <CardsProject projects={filteredData} />
        )}
      </Box>
    </Box>
  );
};

export default ProjectsPage;
