import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreatePlant } from "../Hooks/useCreatePlant";
import { CreatePlantSchema } from "../../../Schemas/Plants";
import type { PlantCreate } from "../Types/Plant";
import { usePlantTypes } from "../Hooks/usePlantTypes";
import type PlantTypes from "../../../Entities/PlantTypes/PlantTypes.entity";

interface FormCreatePlantProps {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  typeForm: string;
  setTypeForm: React.Dispatch<React.SetStateAction<string>>;
  plantId?: number;
}

export default function FormCreatePlant({ setIsOpenModal, typeForm, setTypeForm, plantId }: FormCreatePlantProps) {
  const { register, handleSubmit } = useForm<PlantCreate>({
    resolver: zodResolver(CreatePlantSchema),
    defaultValues: {
    plantTypeId: 1
  }
  });

  const { data: plantTypesData } = usePlantTypes();


  const createPlant = useCreatePlant();

  const SubmitCreatePlant = (data: PlantCreate) => {
    console.log('teste')
    createPlant.mutate(data, {
      onSuccess: () => {
        setTypeForm('');
        setIsOpenModal(false);
      }
    });
  };

  // Implementação pendente do hook useUpdatePlant
  const SubmitUpdatePlant = (data: PlantCreate) => {
    console.log("Update plant", plantId, data);
    setIsOpenModal(false);
    setTypeForm('');
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
      onSubmit={handleSubmit(typeForm === 'update' ? SubmitUpdatePlant : SubmitCreatePlant)}
    >
      <Typography variant="h5" sx={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
        {typeForm === 'update' ? 'Editar Planta' : 'Criar Nova Planta'}
      </Typography>
      <TextField
        required
        label="Nome"
        {...register('name')}
        sx={{ marginBottom: '2rem', width: '100%' }}
      />

      <TextField
        required
        label="Nome Cientifico"
        {...register('scientificName')}
        sx={{ marginBottom: '2rem', width: '100%' }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          gap: 2
        }}
      >
      <TextField
        required
        label="Tempo minimo até colheita (dias)"
        {...register('harvestMinDays', {
          valueAsNumber: true
        })}
        sx={{ marginBottom: '2rem', width: '100%' }}
      />
      <TextField
        required
        label="Tempo maximo até colheita (dias)"
        {...register('harvestMaxDays', {
          valueAsNumber: true
        })}
        sx={{ marginBottom: '2rem', width: '100%' }}
      />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          gap: 2
        }}
      >
      <TextField
        required
        label="Minimo de horas de sol"
        {...register('sunshineMinHours', {
          valueAsNumber: true
        })}
        sx={{ marginBottom: '2rem', width: '100%' }}
      />
      <TextField
        required
        label="Maximo de horas de sol"
        {...register('sunshineMaxHours', {
          valueAsNumber: true
        })}
        sx={{ marginBottom: '2rem', width: '100%' }}
      />
      </Box>
      <TextField
        required
        select
        label="Tipo de planta"
        {...register('plantTypeId')}
        sx={{ marginBottom: '2rem', width: '100%' }}
      >
        {
          plantTypesData && plantTypesData.map((plantType : PlantTypes ) => (
            <MenuItem key={plantType.id} value={plantType.id}>
              {plantType.description}
            </MenuItem>
          ))
        }
      </TextField>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          gap: 2
        }}
      >
      <TextField
        required
        label="Dias minimos até germinação"
        {...register('germinationMinDays', {
          valueAsNumber: true
        })}
        sx={{ marginBottom: '2rem', width: '100%' }}
      />
      <TextField
        required
        label="Dias maximo até germinação"
        {...register('germinationMaxDays', {
          valueAsNumber: true
        })}
        sx={{ marginBottom: '2rem', width: '100%' }}
      />

      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          gap: 2
        }}
      >
      <TextField
        required
        label="Ph minimo"
        {...register('phMin', {
          valueAsNumber: true
        })}
        sx={{ marginBottom: '2rem', width: '100%' }}
      />
      <TextField
        required
        label="Ph maximo"
        {...register('phMax', {
          valueAsNumber: true
        })}
        sx={{ marginBottom: '2rem', width: '100%' }}
      />

      </Box>
      <TextField
        required
        label="Distancia entre plantas (cm)"
        {...register('plantingDistancePlants', {
          valueAsNumber: true
        })}
        sx={{ marginBottom: '2rem', width: '100%' }}
      />
      <TextField
        multiline
        rows={4}
        label="Descrição de plantio"
        {...register('plantingDescription')}
        sx={{ marginBottom: '2rem', width: '100%' }}
      />
      <TextField
        multiline
        rows={4}
        label="Descrição de manejo"
        {...register('managementDescription')}
        sx={{ marginBottom: '2rem', width: '100%' }}
      />



      <Button
        type="submit"
        variant="contained"
        endIcon={<SendIcon />}
        size="large"
        sx={{
          marginTop: '2rem',
          background: 'linear-gradient(135deg, #6e9662 0%, #4a6343 100%)'
        }}>
        {typeForm === 'update' ? 'Salvar Alterações' : 'Criar Planta'}
      </Button>
    </Box>
  );
}