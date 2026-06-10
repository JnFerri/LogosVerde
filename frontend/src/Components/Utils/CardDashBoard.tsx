import { Box, Typography } from "@mui/material"


const CardDashBoard = ({Icon, title, value}: {Icon: React.ElementType, title: string, value: React.ReactNode }) => {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                justifyContent:'flex-start', 
                alignItems:'center', 
                gap:2, 
                p:2, 
                borderRadius: 2, 
                backgroundColor:'background.paper', 
                boxShadow: 1}}>
            <Box sx={{background:'linear-gradient(135deg, #9ab386 0%, #a7b0a0 100%)', p:1}}>
            <Icon />
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'flex-start'}}>
            <Typography variant="h6" sx={{fontSize:'12px', color:'text.secondary'}}> {title}</Typography>
            <Typography variant="body1" sx={{fontSize:'20px'}}> {value}</Typography>
            </Box>
            </Box>
        </Box>
    )
}

export default CardDashBoard