import { Box } from "@mui/material"
import CardsProjects from "../Components/CardProject";
import { useProjectsWithAreaPlantings } from "../Hooks/useProjectsWithAreaPlantings";


const ProjectsPage = () => {
  const {data, isLoading} = useProjectsWithAreaPlantings()

  return(
    <Box sx={{ width: '100%',display: 'flex',flexWrap:'wrap', justifyContent:'left' , margin:'10px 0'}}>
      {isLoading ? <p>Carregando...</p> :
      <CardsProjects projects={data}/>}
    </Box>
  )
}

export default ProjectsPage