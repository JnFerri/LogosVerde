import { Box, Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import type { ProjectUpdate } from "../../../Entities/Project/Project.type";
import { useForm } from "react-hook-form";


export default function FormCreateProject() {
  const { register, handleSubmit } = useForm();
  const SubmitCreateProject = (dados: ProjectUpdate) => {
    console.log(dados)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: '100%',
        margin: '0 auto',
        padding: 4
      }}
      component='form'
      onSubmit={handleSubmit(SubmitCreateProject)}
    >

      <TextField
        required
        id="outlined-required"
        label="Nome Projeto"
        defaultValue=""
        {...register('name')}
        sx={{ marginBottom: '2rem', width: '100%' }}
      />
      <Button
        type="submit"
        variant="contained"
        endIcon={<SendIcon />}
        size="large">
        Criar Projeto
      </Button>
    </Box>
  )
}