
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from 'react-router-dom';

const cards = [
  {
    id: 0,
    title: 'Criar Novo Projeto',
    description: 'Crie um novo projeto onde poderá adiministrar suas aréas de plantio.',
  },
  {
    id: 1,
    title: 'Acessar Projetos',
    description: 'Acesse os projetos ja criados anteriormente.',
  }
 
];

interface CardsHomePageProps {
  isOpenModal: () => void;
}

function CardsHomePage({ isOpenModal}: CardsHomePageProps) {
  const navigate = useNavigate()
  return (
    <Box sx={{ width: '100%',display: 'grid',gridTemplateColumns: 'repeat(auto-fit, minmax(200px,min(600px, 100%)))',gap: 2 , justifyContent:'center' , margin:'10px 0'}}>
      {cards.map((card) => (
        <Card key={card.id}>
          <CardActionArea
            onClick={() => card.id === 0 ? isOpenModal() : navigate('/projects') }
            sx={{
              height: '100%',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
              },
            }}
          >
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default CardsHomePage;