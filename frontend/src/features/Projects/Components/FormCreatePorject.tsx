import { Box, Button, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import type { ProjectCreate, ProjectUpdate,  } from "../Types/Project";
import { useForm } from "react-hook-form";
import { useCreateProject } from "../Hooks/useCreateProject";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProjectUpdateSchema } from "../Schemas/Projects";
import { useUpdateProject } from "../Hooks/UseUpdateProject";

export default function FormCreateProject({ setIsOpenModal , typeForm , setTypeForm , projectId} : {setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>> , typeForm: string , setTypeForm: React.Dispatch<React.SetStateAction<string>> , projectId?: number }) {
  const { register, handleSubmit } = useForm<ProjectCreate>({
    resolver: zodResolver(ProjectUpdateSchema)
  });
  const createProject = useCreateProject();
  const updateProject = useUpdateProject();

  const SubmitCreateProject = (dados: ProjectCreate) => {
    createProject.mutate(dados)
    setTypeForm('')
    setIsOpenModal(false)
  }

  const SubmitUpdateProject = (dados: ProjectUpdate) => {
    if(!projectId){
      alert('Projeto não encontrado')
      return 
    }
    updateProject.mutate({id:projectId, data: dados })
    setTypeForm('')
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
      onSubmit={handleSubmit(typeForm === 'update' ? SubmitUpdateProject : SubmitCreateProject)}
    >
      <Typography variant="h5" sx={{ marginBottom: '2rem' , display: 'flex', justifyContent: 'center'}}>
        {typeForm === 'update' ? 'Editar Projeto' : 'Criar Projeto'}
      </Typography>
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
        size="large"
        sx={{
          background: 'linear-gradient(135deg, #6e9662 0%, #4a6343 100%)'
        }}>
        Criar Projeto
      </Button>
    </Box>
  )
}