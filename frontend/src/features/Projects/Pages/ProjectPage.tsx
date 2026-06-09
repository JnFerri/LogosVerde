import { Box, Modal } from "@mui/material"
import PageHeader, { type HeaderActions } from "../../../Components/Navigation/PageHeader"
import { useParams } from "react-router-dom"
import { useProjectStore } from "../Stores/useProjectStore"
import { useProject } from "../Hooks/useProject"
import DashBoardProject from "../Components/DashBoardProject"
import CardsPlantingArea from "../../PlantingAreas/Components/CardsPlantingArea"
import { usePlantingAreasByProjectId } from "../../PlantingAreas/Hooks/usePlantingAreasByProjectId"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react"
import FormCreatePlantingArea from "../../PlantingAreas/Components/FormCreatePlantingArea"

const ProjectPage = () => {
  const { projectId } = useParams()
  const [isOpenModal, setIsOpenModal] = useState(false)
  
  const selectedProject = useProjectStore(
    (state) => state.selectedProject
  )


  const shouldFetch : boolean = !selectedProject || selectedProject.id !== Number(projectId)
  const { data :projectData  } = useProject(Number(projectId) , shouldFetch)

  const shouldFetchAreaPlantings : boolean = !selectedProject?.plantingAreas || selectedProject?.plantingAreas.length === 0
  
  const {data : plantingAreasData } = usePlantingAreasByProjectId(selectedProject ? selectedProject.id : projectData.id , shouldFetchAreaPlantings)
 
 
  
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
      label:`Projeto - ${selectedProject ? selectedProject.name : ''}`,
      path:`/projects/${selectedProject ? selectedProject.id : ''}`
    }
  ]

  const headerActions: HeaderActions[] = [
    {
      description: 'Nova Área de Plantio',
      icon: <AddIcon />,
      onClick: () => {
        setIsOpenModal(true)
      }
    }
  ]

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%'
    }}>
      <PageHeader 
        title= {`Projeto - ${selectedProject ? selectedProject.name : ''}`} 
        breadcrumbs={breadcrumbs} 
        actions={headerActions}
      />
      <DashBoardProject selectedProject={selectedProject ? selectedProject : projectData} />
      
      <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)} sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Box sx={{ width: '80%', maxWidth: '500px', height: '40%', backgroundColor: 'white', borderRadius: 2 }}>
          <FormCreatePlantingArea projectId={Number(projectId)} setIsOpenModal={setIsOpenModal} />
        </Box>
      </Modal>

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
      <CardsPlantingArea plantingAreas={selectedProject?.plantingAreas || plantingAreasData || []} />
      </Box>
    </Box>
  )
}

export default ProjectPage;