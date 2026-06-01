
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from 'react-router-dom';
import ForestIcon from '@mui/icons-material/Forest';
import type ProjectWithPlantingAreas from '../Entities/ProjectWithPantingAreas';
import { Box } from '@mui/material';




function CardsProjects({ projects }: { projects: ProjectWithPlantingAreas[] }) {
  const navigate = useNavigate()
  return (
    <>
      {projects.map((project) => (
        <Card key={project.id} sx={{height:'350px'}}>
          <CardActionArea
            onClick={() => navigate(`/${project.id}`) }
            sx={{
              height: '100%',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
              },
            }}
          >
            <CardContent sx={{display: 'flex',
    flexDirection: 'column', height: '100%' , p:'0'}}>
              <Box sx={{backgroundColor:'#d6b696', width:'100%', height:'50%' , flexDirection:'column', justifyContent:'center', alignItems:'center', display:'flex'}}>
              <ForestIcon sx={{backgroundColor:'#6e9662', width:'100%', height:'50%'}} />
              <Typography variant="h4" sx={{textAlign:'center', height:'50%', p:1, alignContent:'center'}}>
                {project.name}
              </Typography>
              </Box>
              <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height:'50%' , backgroundColor:'#f7f0e4'}}>
              <Typography sx={{textAlign:'center'}} >
                Criado em : {new Date(project.createdAt).toLocaleDateString('PT-br')}
              </Typography>
              <Typography sx={{textAlign:'center'}}>
                Quantidades de areas de plantio: {project.plantingAreas.length}
              </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}

export default CardsProjects;