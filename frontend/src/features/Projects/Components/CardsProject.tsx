
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from 'react-router-dom';
import ForestIcon from '@mui/icons-material/Forest';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GrassIcon from '@mui/icons-material/Grass';
import type ProjectWithPlantingAreas from '../Entities/ProjectWithPantingAreas';
import { Box, Divider, Stack } from '@mui/material';
import { useProjectStore } from '../Stores/useProjectStore';

function CardsProject({ projects }: { projects: ProjectWithPlantingAreas[] }) {
  const navigate = useNavigate()
  const setSelectedProject = useProjectStore(
  (state) => state.setSelectedProject
)
  
  return (
    <>
      {projects.map((project) => (
        <Card 
          key={project.id} 
          sx={{
            height:'350px', 
            borderRadius: 4, 
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: 8,
            },
          }}
        >
          <CardActionArea
            onClick={() =>{
              setSelectedProject(project)
              navigate(`/projects/${project.id}`)} }
            sx={{ height: '100%' }}
          >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 0 }}>
              <Box 
                sx={{
                  background: 'linear-gradient(135deg, #6e9662 0%, #4a6343 100%)', 
                  width:'100%', 
                  height:'45%', 
                  flexDirection:'column', 
                  justifyContent:'center', 
                  alignItems:'center', 
                  display:'flex',
                  color: 'white'
                }}
              >
                <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '50%', p: 1.5, mb: 1 }}>
                  <ForestIcon />
                </Box>
                <Typography variant="h5" sx={{ textAlign:'center', fontWeight: 'bold', px: 2 }}>
                  {project.name}
                </Typography>
              </Box>
              
              <Box 
                sx={{
                  display:'flex', 
                  flexDirection:'column', 
                  justifyContent:'center', 
                  height:'55%', 
                  backgroundColor:'#f7f0e4',
                  px: 3
                }}
              >
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <CalendarMonthIcon sx={{ color: '#8b5a2b', fontSize: 20 }} />
                    <Typography variant="body2" color="text.secondary">
                      Criado em: <strong>{new Date(project.createdAt).toLocaleDateString('PT-br')}</strong>
                    </Typography>
                  </Box>
                  
                  <Divider sx={{ opacity: 0.6 }} />
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <GrassIcon sx={{ color: '#6e9662', fontSize: 20 }} />
                    <Typography variant="body2" color="text.secondary">
                      Áreas de plantio: <strong>{project.plantingAreas.length}</strong>
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}

export default CardsProject;