import { Box, Typography } from "@mui/material";
import CardDashBoard from "../../../Components/Utils/CardDashBoard";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SunnyIcon from '@mui/icons-material/Sunny';
import OpacityIcon from '@mui/icons-material/Opacity';
import StraightenIcon from '@mui/icons-material/Straighten';
import GrassIcon from '@mui/icons-material/Grass';
import type { PlantWithRelations } from "../Types/Plant";
import { usePlantIcons} from "../Hooks/usePlantsIcons";

const DashBoardPlant = ({ plant }: {
  plant: PlantWithRelations
}) => {
  const {icons : plantIcons} = usePlantIcons()

  return (
    
    <Box sx={{
      width: '95%',
      minHeight: '30%',
      boxShadow: '1px 1px 4px',
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: '#f7f0e4',
      marginTop:'1rem',
      borderRadius:'1rem',
      flexDirection:'column'
        
    }}>
      {plant && (
        <>
      <Box 
      component={'div'}
      sx={{
        
        width:'95%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:1,
        p:1
      }}>
      <Box
        component='img'
        src={plantIcons?.find((icon) => icon.name === plant.plantIconName)?.src || ''}
        alt={plant.plantIconName}
        sx={{
          width: '10%'
        }}
      />
      <Box sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'85%'
      }}>

        <Typography variant="h6" component="div">{plant.name.toLocaleUpperCase()}</Typography>
        <Typography variant="body2" color="text.secondary">{plant.scientificName.toLocaleUpperCase()}</Typography>
      
      </Box>
      </Box>
      <Box sx={{
        display: 'grid',
        width: {md:'85%', xs:'100%'},
        gridTemplateColumns: {
          xs: 'repeat(auto-fit, minmax(240px, 1fr))',
          md: 'repeat(auto-fit, minmax(240px, 6fr))',
        },
        gap: 2,
        p: 1
      }}>
        <CardDashBoard Icon={GrassIcon} title='Tipo da Planta' value={plant.plantTypes.description}/>
        <CardDashBoard Icon={OpacityIcon} title='pH Minimo - pH Maximo' value={`${plant.phMin} - ${plant.phMax}`}/>
        <CardDashBoard Icon={ShoppingBasketIcon} title='Min até Colheita - Max até Colheita' value={`${plant.harvestMinDays} dias - ${plant.harvestMaxDays} dias`}/>
        <CardDashBoard Icon={CalendarMonthIcon} title='Min Germinação - Max germinação' value={`${plant.germinationMinDays} dias - ${plant.germinationMaxDays} dias`}/>
        <CardDashBoard Icon={SunnyIcon} title='Min sol  - Max Sol' value={`${plant.sunshineMinHours} horas - ${plant.sunshineMaxHours} horas`}/>
        <CardDashBoard Icon={StraightenIcon} title='Distancia entre plantas' value={plant.plantingDistancePlants + 'cm'}/>
        </Box>
        </>
      ) }
      </Box>
    
      )
    
}

export default DashBoardPlant