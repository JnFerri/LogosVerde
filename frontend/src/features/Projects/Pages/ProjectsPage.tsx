import { Box } from "@mui/material"
import CardsProjects from "../Components/CardsProject";
import { useProjectsWithAreaPlantings } from "../Hooks/useProjectsWithAreaPlantings";


const ProjectsPage = () => {
  const {data, isLoading} = useProjectsWithAreaPlantings()

  return(
    <Box sx={{
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: 2,}}>
      {isLoading ? <p>Carregando...</p> :
      <CardsProjects projects={data}/>}
    </Box>
  )
}

export default ProjectsPage