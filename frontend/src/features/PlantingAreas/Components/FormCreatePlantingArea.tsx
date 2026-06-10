import { Box, Button, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useForm } from "react-hook-form";
import React from "react";
import type { PlantingAreaCreate } from "../Types/PlantingAreas";
import { useCreatePlantingArea } from "../Hooks/useCreatePlantingArea";
import { useUpdatePlantingArea } from "../Hooks/useUpdatePlantingArea";

// Sugestão: Crie um hook useCreatePlantingArea e um schema Zod similar ao de Projetos
// import { zodResolver } from "@hookform/resolvers/zod";
// import { PlantingAreaUpdateSchema } from "../Schemas/PlantingAreas";
// import { useCreatePlantingArea } from "../Hooks/useCreatePlantingArea";

interface FormCreatePlantingAreaProps {
  projectId: number;
  plantingAreaId?: number;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  typeForm: string;
  setTypeForm: React.Dispatch<React.SetStateAction<string>>;
}

export default function FormCreatePlantingArea({projectId, plantingAreaId, setIsOpenModal , typeForm , setTypeForm}: FormCreatePlantingAreaProps) {
  const { register, handleSubmit } = useForm<PlantingAreaCreate >();
  
  // const createPlantingArea = useCreatePlantingArea();
  const createPlantingArea = useCreatePlantingArea()
  const onSubmitCreate = (data: PlantingAreaCreate) => {
    createPlantingArea.mutate({ ...data, projectId });
    setIsOpenModal(false);
  }
  const updatePlantingArea = useUpdatePlantingArea();

  const SubmitUpdatePlantingArea = (dados: PlantingAreaCreate) => {
    if (!plantingAreaId) {
      alert('Área de plantio não encontrada');
      return;
    }
    updatePlantingArea.mutate({ id: plantingAreaId, data: { ...dados } });
    setTypeForm('');
    setIsOpenModal(false);
  };

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
      onSubmit={handleSubmit(typeForm === 'update' ? SubmitUpdatePlantingArea : onSubmitCreate)}
    >
      <Typography variant="h5" sx={{ marginBottom: '2rem' , display: 'flex', justifyContent: 'center'}}>
        {typeForm === 'update' ? 'Editar Área de Plantio' : 'Criar Área de Plantio'}
      </Typography>
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
        size="large"
        sx={{
          background: 'linear-gradient(135deg, #6e9662 0%, #4a6343 100%)'
        }}>
        Criar Área
      </Button>
    </Box>
  )
}