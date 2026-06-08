import { Box } from "@mui/material"
import PageHeader from "../../../Components/Navigation/PageHeader"
import { useParams } from "react-router-dom"
import { useProjectStore } from "../Stores/useProjectStore"
import { useProject } from "../Hooks/useProject"
import DashBoardProject from "../Components/DashBoardProject"
import { useEffect } from "react"


const ProjectPage = () => {
  const { projectId } = useParams()
  
  const selectedProject = useProjectStore(
    (state) => state.selectedProject
  )

  const setSelectedProject = useProjectStore(
    (state) => state.setSelectedProject
  )


  const shouldFetch : boolean = !selectedProject || selectedProject.id !== Number(projectId)
  const { data  } = useProject(Number(projectId) , shouldFetch)

 
  useEffect(() => {
    setSelectedProject(data)
  }, [data , setSelectedProject])
  
  const breadcrumbs = [
    {
      label:'Home',
      path:'/'
    },
    {
      label:'Projetos',
      path:'/projects'
    },
    {
      label:selectedProject ? selectedProject.name : '',
      path:`/projects/${selectedProject ? selectedProject.id : ''}`
    }
  ]

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%'
    }}>
      <PageHeader title= {selectedProject ? selectedProject.name : ''} breadcrumbs={breadcrumbs} />
      <DashBoardProject selectedProject={selectedProject ? selectedProject : data} />
      <Box sx={{
        display: 'grid',
        width: '100%',
        gridTemplateColumns: {xs:'repeat(auto-fit, minmax(240px, 1fr))',
      md:'repeat(auto-fit, minmax(240px, 240px))',
    },
        gap: 2,
        p:1,
        borderRadius: 2,
        backgroundColor:'background.paper',
        boxShadow: 1
    }}>

      </Box>
    </Box>
  )
}

export default ProjectPage;