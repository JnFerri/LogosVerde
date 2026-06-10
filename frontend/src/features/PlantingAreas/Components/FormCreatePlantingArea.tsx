import { Box, Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useForm } from "react-hook-form";
import React from "react";
import type { PlantingAreaCreate } from "../Types/PlantingAreas";
import { useCreatePlantingArea } from "../Hooks/useCreatePlantingArea";

// Sugestão: Crie um hook useCreatePlantingArea e um schema Zod similar ao de Projetos
// import { zodResolver } from "@hookform/resolvers/zod";
// import { PlantingAreaUpdateSchema } from "../Schemas/PlantingAreas";
// import { useCreatePlantingArea } from "../Hooks/useCreatePlantingArea";

interface FormCreatePlantingAreaProps {
  projectId: number;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FormCreatePlantingArea({ projectId, setIsOpenModal }: FormCreatePlantingAreaProps) {
  const { register, handleSubmit } = useForm<PlantingAreaCreate >();
  
  // const createPlantingArea = useCreatePlantingArea();
  const createPlantingArea = useCreatePlantingArea()
  const onSubmit = (data: PlantingAreaCreate) => {
    createPlantingArea.mutate({ ...data, projectId });
    setIsOpenModal(false);
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: 4
      }}
      component='form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        required
        label="Nome da Área de Plantio"
        {...register('name')}
        sx={{ marginBottom: '2rem', width: '100%' }}
      />

      <TextField
        type = 'number'
        label="Quantidade de horas de sol"
        {...register('sunshineHours', {
          valueAsNumber: true,
        })}
        sx={{ marginBottom: '2rem', width: '100%' }}
      />
      <Button
        type="submit"
        variant="contained"
        endIcon={<SendIcon />}
        size="large">
        Criar Área
      </Button>
    </Box>
  )
}