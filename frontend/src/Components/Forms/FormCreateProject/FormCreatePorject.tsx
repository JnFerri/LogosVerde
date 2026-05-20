import { Box, Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';


export default function FormCreateProject(){
  const SubmitCreateProject = (e : React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('teste')
  }

  return(
    <Box 
    sx={{ 
      display: 'flex',
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent:'center',
      width: '80%', 
      height: '100%',
      margin: '0 auto', 
      padding: 4 }}
    component='form'
    onSubmit={SubmitCreateProject}
      >
      <TextField
          required
          id="outlined-required"
          label="Nome Projeto"
          defaultValue=""
        />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
        Criar Projeto
      </Button>
    </Box>
  )
}