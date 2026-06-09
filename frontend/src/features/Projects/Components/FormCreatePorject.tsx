import { Box, Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import type { ProjectCreate,  } from "../Types/Project";
import { useForm } from "react-hook-form";
import { useCreateProject } from "../Hooks/useCreateProject";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProjectUpdateSchema } from "../Schemas/Projects";

export default function FormCreateProject({ setIsOpenModal} : {setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>}) {
  const { register, handleSubmit } = useForm<ProjectCreate>({
    resolver: zodResolver(ProjectUpdateSchema)
  });
  const createProject = useCreateProject();
  const SubmitCreateProject = (dados: ProjectCreate) => {
    createProject.mutate(dados)
    setIsOpenModal(false)
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