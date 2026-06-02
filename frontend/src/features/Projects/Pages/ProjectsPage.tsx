import { Box, Modal } from "@mui/material"
import CardsProjects from "../Components/CardsProject";
import { useProjectsWithAreaPlantings } from "../Hooks/useProjectsWithAreaPlantings";
import type Project from "../Entities/Project";
import type { HeaderActions } from "../../../Components/Navigation/PageHeader";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import FormCreateProject from "../Components/FormCreatePorject";
import PageHeader from "../../../Components/Navigation/PageHeader";
import type { SearchOption } from "../../../Interface/SearchOptions";



const ProjectsPage = () => {
  const {data, isLoading} = useProjectsWithAreaPlantings()
  const [IsOpenModal, setIsOpenModal] = useState(false)
  const [searchField, setSearchField] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const searchOptions : SearchOption<Project>[] = [
  {
    label: "Nome",
    value: "name",
    filter: (project: Project, search: string) =>
      project.name
        .toLowerCase()
        .includes(search.toLowerCase()),
  },
  {
    label: "Data",
    value: "createdAt",
    filter: (project: Project, search: string) =>
      new Date(project.createdAt).toLocaleDateString('PT-br').includes(search),
  }
];

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
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: 2,}}>
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
      {isLoading ? <p>Carregando...</p> :
      <CardsProjects projects={data}/>}
    </Box>
  )
}

export default ProjectsPage