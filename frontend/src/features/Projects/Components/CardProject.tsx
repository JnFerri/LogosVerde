
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from 'react-router-dom';
import ForestIcon from '@mui/icons-material/Forest';
import type ProjectWithPlantingAreas from '../Entities/ProjectWithPantingAreas';
import { Box } from '@mui/material';


interface ProjectsHomePageProps {
  projects: ProjectWithPlantingAreas[];
}

function CardsProjects({ projects }: ProjectsHomePageProps) {
  const navigate = useNavigate()
  return (
    <>
      {projects.map((project) => (
        <Card key={project.id} sx={{maxWidth:'30%' , minWidth:'20%' }}>
          <CardActionArea
            onClick={() => navigate(`/${project.id}`) }
            sx={{
              height: '100%',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
              },
            }}
          >
            <CardContent sx={{ height: '100%' , p:'0'}}>
              <Box sx={{backgroundColor:'#d6b696', width:'100%'}}>
              <ForestIcon/>
              <Typography variant="h3">
                {project.name}
              </Typography>
              </Box>
              <Typography >
                Criado em : {new Date(project.createdAt).toLocaleDateString('PT-br')}
              </Typography>
              <Typography >
                Quantidades de areas de plantio: : {project.plantingAreas.length}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}

export default CardsProjects;