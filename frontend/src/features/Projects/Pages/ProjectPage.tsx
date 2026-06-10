import { Box, Modal } from "@mui/material"
import PageHeader from "../../../Components/Navigation/PageHeader"
import { useNavigate, useParams } from "react-router-dom"
import { useProjectStore } from "../Stores/useProjectStore"
import { useProject } from "../Hooks/useProject"
import DashBoardProject from "../Components/DashBoardProject"
import CardsPlantingArea from "../../PlantingAreas/Components/CardsPlantingArea"
import { usePlantingAreasByProjectId } from "../../PlantingAreas/Hooks/usePlantingAreasByProjectId"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react"
import FormCreatePlantingArea from "../../PlantingAreas/Components/FormCreatePlantingArea"
import type { HeaderActions } from "../../../Interface/PageHeader/HeaderActions"
import EditIcon from '@mui/icons-material/Edit';
import FormCreateProject from "../Components/FormCreatePorject"
import DeleteIcon from '@mui/icons-material/Delete';
import { ConfirmDialog } from "../../../Components/Utils/ConfirmDialog"
import { useDeleteProject } from "../Hooks/useDeleteProject"


const ProjectPage = () => {
  const { projectId } = useParams()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [typeForm , setTypeForm] = useState('')
  const [isOpenConfirmation, setIsOpenConfirmation] = useState(false)
  const navigate = useNavigate()

  const deleteProject = useDeleteProject()
  const selectedProject = useProjectStore(
    (state) => state.selectedProject
  )


  const shouldFetch : boolean = !selectedProject || selectedProject.id !== Number(projectId)
  const { data :projectData  } = useProject(Number(projectId), shouldFetch)

  const shouldFetchAreaPlantings : boolean = !selectedProject?.plantingAreas || selectedProject?.plantingAreas.length === 0
  
  
  const {data : plantingAreasData } = usePlantingAreasByProjectId(selectedProject ? selectedProject?.id : projectData?.id, shouldFetchAreaPlantings )

 
 
  
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
        setTypeForm('create')
        setIsOpenModal(true)
      }
    },
    {
      description: 'Editar Projeto',
      icon: <EditIcon />,
      onClick: () => {
        setTypeForm('update')
        setIsOpenModal(true)
      }
    },
    {
      description: 'Excluir Projeto',
      icon: <DeleteIcon />,
      onClick: () => {
        setIsOpenConfirmation(true)
      },
      background: '#ab4141'
    }
  ]

  const removeProject = () => {
    deleteProject.mutate(selectedProject ? selectedProject?.id : projectData?.id)
  }

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
      
      <Modal open={isOpenModal} onClose={() =>{
        setTypeForm('')
       setIsOpenModal(false)}} sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Box sx={{ width: '80%', maxWidth: '500px', height: 'auto',minheight:'40%', backgroundColor:'#f7f0e4', borderRadius: 2 }}>
          {typeForm === 'create' && <FormCreatePlantingArea projectId={Number(projectId)} typeForm={typeForm} setTypeForm={setTypeForm} setIsOpenModal={setIsOpenModal} />}
          {typeForm === 'update' && <FormCreateProject projectId={Number(projectId)} typeForm={typeForm} setTypeForm={setTypeForm} setIsOpenModal={setIsOpenModal} />}
        </Box>
      </Modal>

      <ConfirmDialog open = {isOpenConfirmation}
      message = {`Tem certeza que deseja excluir o projeto ${selectedProject?.name}`}
      onConfirm = {() => {
        setIsOpenConfirmation(false)
        removeProject()
        navigate('/projects')
      
      }}
      onClose = {() => {
        setIsOpenConfirmation(false)
      }
    }
      />

      <Box sx={{
        display: 'grid',
        width: '100%',
        gridTemplateColumns: {xs:'repeat(auto-fit, minmax(240px, 1fr))',
      md:'repeat(auto-fit, minmax(240px, 240px))',
    },
        gap: 2,
        p:1
    }}>
      <CardsPlantingArea plantingAreas={selectedProject?.plantingAreas || plantingAreasData || []} />
      </Box>
    </Box>
  )
}

export default ProjectPage;