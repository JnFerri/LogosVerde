import { Box } from "@mui/material"
import PageHeader from "../../../Components/Navigation/PageHeader"
import { useParams } from "react-router-dom"
import { useProjectStore } from "../Stores/useProjectStore"
import { useProject } from "../Hooks/useProject"


const ProjectPage = () => {
  const { projectId } = useParams()
  
  const selectedProject = useProjectStore(
    (state) => state.selectedProject
  )

  const shouldFetch : boolean = !selectedProject || selectedProject.id !== Number(projectId)

  const { data, isLoading} = useProject(Number(projectId) , shouldFetch)
 

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%'
    }}>
      <PageHeader title="Projetos - Areas de Plantio " />
      
    </Box>
  )
}

export default ProjectPage;