import { Box, Modal } from "@mui/material"
import CardsProject from "../Components/CardsProject";
import { useProjectsWithAreaPlantings } from "../Hooks/useProjectsWithAreaPlantings";
import type { HeaderActions } from "../../../Components/Navigation/PageHeader";
import AddIcon from '@mui/icons-material/Add';
import {  useMemo, useState } from "react";
import FormCreateProject from "../Components/FormCreatePorject";
import PageHeader from "../../../Components/Navigation/PageHeader";
import type { SearchOption } from "../../../Interface/SearchOptions";
import type Project from "../Entities/Project";



const ProjectsPage = () => {
  const {data, isLoading} = useProjectsWithAreaPlantings()
  const [IsOpenModal, setIsOpenModal] = useState(false)
  const [searchField, setSearchField] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const searchOptions : SearchOption[] = [
  {
    label: "Nome",
    value: "name",
    
  },
  {
    label: "Data",
    value: "createdAt",
    
  }
];



const filteredData = useMemo(() => {
  if (!data) return [];

  const filters = {
  name: (project: Project, search: string) =>
    project.name
      .toLowerCase()
      .includes(search.toLowerCase()),

  createdAt: (project: Project, search: string) =>
    new Date(project.createdAt)
      .toLocaleDateString("pt-BR")
      .includes(search),
};

  const filterFn =
    filters[searchField as keyof typeof filters];

  if (!filterFn) {
    return data;
  }

  return data.filter((project: Project) =>
    filterFn(project, searchValue)
  );
}, [
  data,
  searchField,
  searchValue,
]);

const headerActions: HeaderActions[] = [
  {
    description: 'Criar Novo Projeto',
    icon: <AddIcon />,
    onClick: () => {
      setIsOpenModal(true)
    }
  }
]




  return(
    <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
    }}>
    <PageHeader title="Projetos" actions={headerActions} searchOptions ={searchOptions} searchField={searchField} searchValue={searchValue} onSearchFieldChange={setSearchField} onSearchValueChange={setSearchValue}/>
    {IsOpenModal && 
    
    <Modal open={IsOpenModal} onClose={() => setIsOpenModal(false)} sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Box sx={{width:'80%', height:'40%', backgroundColor:'white'}}>
      <FormCreateProject setIsOpenModal={setIsOpenModal}/>

      </Box>
    </Modal>
}
    <Box sx={{
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: 2,
    p:1}}>
      {isLoading ? <p>Carregando...</p> :
      <CardsProject projects={filteredData}/>}
    </Box>
    </Box>
  )
}

export default ProjectsPage