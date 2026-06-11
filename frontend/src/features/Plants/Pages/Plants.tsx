import { Box, Modal } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useMemo, useState } from "react";
import PageHeader from "../../../Components/Navigation/PageHeader";
import type { SearchOption } from "../../../Interface/PageHeader/SearchOptions";
import type { HeaderActions } from "../../../Interface/PageHeader/HeaderActions";
import type Plant from "../Entities/Plant";
import { usePlants } from "../Hooks/usePlants";
import FormCreatePlant from "../Components/FormCreatePlant";
import CardsPlant from "../Components/CardsPlant";



const PlantsPage = () => {
  const { data, isLoading } = usePlants()
  const [typeForm, setTypeForm] = useState('')
  const [IsOpenModal, setIsOpenModal] = useState(false)
  const [searchField, setSearchField] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const searchOptions: SearchOption[] = [
    {
      label: "Nome",
      value: "name",

    },
    {
      label: "Nome Cientifico",
      value: "scientificName"
    }
  ];

  const breadcrumbs = [
    {
      label: 'Home',
      path: '/'
    },
    {
      label: 'Plantas',
      path: '/plants'
    }
  ]



  const filteredData = useMemo(() => {
    if (!data) return [];

    const filters = {
      name: (plant: Plant, search: string) =>
        plant.name
          .toLowerCase()
          .includes(search.toLowerCase()),

      scientificName: (plant: Plant, search: string) =>
        plant.scientificName
          .toLowerCase()
          .includes(search.toLocaleLowerCase()),
    };

    const filterFn =
      filters[searchField as keyof typeof filters];

    if (!filterFn) {
      return data;
    }

    return data.filter((plant: Plant) =>
      filterFn(plant, searchValue)
    );
  }, [
    data,
    searchField,
    searchValue,
  ]);

  const headerActions: HeaderActions[] = [
    {
      description: 'Criar Nova Planta',
      icon: <AddIcon />,
      onClick: () => {
        setIsOpenModal(true)
        setTypeForm('create')
      }
    }
  ]




  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%'
    }}>
      <PageHeader title="Plantas"
        actions={headerActions}
        searchOptions={searchOptions}
        searchField={searchField}
        searchValue={searchValue}
        onSearchFieldChange={setSearchField}
        onSearchValueChange={setSearchValue}
        breadcrumbs={breadcrumbs}
      />
      {IsOpenModal &&

        <Modal open={IsOpenModal} onClose={() => {
          setIsOpenModal(false)
          setTypeForm('')
        }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Box sx={{ width: '80%', height: 'auto', maxWidth: '700px', overflow: 'auto', minheight: '40%', maxHeight: '80vh', backgroundColor: '#f7f0e4', borderRadius: 2 }}>

            <FormCreatePlant setIsOpenModal={setIsOpenModal} typeForm={typeForm} setTypeForm={setTypeForm} />

          </Box>
        </Modal>
      }
      <Box sx={{
        display: 'grid',
        width: '100%',
        gridTemplateColumns: {
          xs: 'repeat(auto-fit, minmax(240px, 1fr))',
          md: 'repeat(auto-fit, minmax(300px, 400pxfr))',
        },
        gap: 2,
        p: 1
      }}>
        {isLoading ? <p>Carregando...</p> :
          <CardsPlant plants={filteredData} />
        }
      </Box>
    </Box>
  )
}

export default PlantsPage