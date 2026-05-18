
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useState } from 'react';

const cards = [
  {
    id: 1,
    title: 'Criar Novo Projeto',
    description: 'Crie um novo projeto onde poderá adiministrar suas aréas de plantio.',
  },
  {
    id: 2,
    title: 'Acessar Projetos',
    description: 'Acesse os projetos ja criados anteriormente.',
  }
 
];

function CardsHomePage() {
  const [selectedCard, setSelectedCard] = useState(0);

  return (
    <Box sx={{ width: '100%',display: 'grid',gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',gap: 2 , justifyContent:'center'}}>
      {cards.map((card, index) => (
        <Card key={card.id}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
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