import { Box } from "@mui/material"
import CardDashBoard from "../../../Components/Utils/CardDashBoard"
import CalendarIcon from '@mui/icons-material/CalendarToday';
import type ProjectWithPlantingAreas from "../Entities/ProjectWithPantingAreas";
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

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
        <CardDashBoard Icon={LocalFloristIcon} title="Areas de Plantio" value={selectedProject?.plantingAreas?.length || 0}/>
        <CardDashBoard Icon={CalendarIcon} title="Criado em" value={selectedProject?.createdAt ? new Date(selectedProject.createdAt).toLocaleDateString('pt-BR') : ''} />
    </Box>
  )
}

export default DashBoardProject