import { Box } from "@mui/material"
import CardDashBoard from "../../../Components/CardDashBoard"
import ForestIcon from '@mui/icons-material/Forest';
import CalendarIcon from '@mui/icons-material/CalendarToday';
import type ProjectWithPlantingAreas from "../Entities/ProjectWithPantingAreas";


const DashBoardProject = ({ selectedProject }: { selectedProject: ProjectWithPlantingAreas }) => {
  return (
    <Box sx={{
        display: 'grid',
        width: '100%',
        gridTemplateColumns: {xs:'repeat(auto-fit, minmax(240px, 1fr))',
      md:'repeat(auto-fit, minmax(240px, 240px))',
    },
        gap: 2,
        p:1
    }}>
        <CardDashBoard Icon={ForestIcon} title="Total de Areas de Plantio" value={selectedProject?.plantingAreas?.length || 0}/>
        <CardDashBoard Icon={CalendarIcon} title="projeto criado em" value={selectedProject?.createdAt ? new Date(selectedProject.createdAt).toLocaleDateString() : ''} />
    </Box>
  )
}

export default DashBoardProject