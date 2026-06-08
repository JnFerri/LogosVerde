import { Box,  Button, MenuItem, Stack, TextField, Typography, useMediaQuery } from "@mui/material";
import type { SearchOption } from "../../Interface/SearchOptions";
import { theme } from "../../Contexts/Theme";
import BreadcrumbsHeader from "./BreadcrumbsHeader";

export interface HeaderActions {
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}
export interface breadcrumbs {
  label: string;
  path?: string;
}



export interface PageHeaderProps {
  title: string;
  actions?: HeaderActions[];
  searchField?: string;
  searchValue?: string;
  onSearchFieldChange?: (value: string) => void;
  onSearchValueChange?: (value: string) => void;
  searchOptions?: SearchOption[];
  breadcrumbs?:breadcrumbs[];
}

export default function PageHeader({
  title,
  actions,
  searchField,
  searchValue,
  onSearchFieldChange,
  onSearchValueChange,
  searchOptions,
  breadcrumbs
}: PageHeaderProps) {

  const isMobile = useMediaQuery(
    theme.breakpoints.down('md')
  );
  
  return (

    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: '100%',
        flexWrap: 'wrap',
        p: 1,
        paddingTop:{xs:4 , md:0},
        backgroundColor: '#d6b696',
      }}
      
      >
         <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',

    }}> {isMobile ? null :
        
      <BreadcrumbsHeader breadcrumbs={breadcrumbs ? breadcrumbs : []}  />
       
        }
        <Typography variant="h4" sx={{
          color: 'white',
          fontWeight: 'bold'
        }}>
          {title}
        </Typography>
      </Box>
     {searchOptions && onSearchFieldChange && onSearchValueChange && (
        <Box sx={{
          p: 1,
          minWidth: '30%'
        }}>
          <Stack
            direction="row"
            spacing={2}
          >
            <TextField
              select
              size="small"
              label="Pesquisar por"
              value={searchField}
              onChange={(e) =>
                onSearchFieldChange(e.target.value)
              }
              sx={{
                backgroundColor: '#f5f5f5',
                minWidth: '30%'
              }}
            >
              {searchOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              size="small"
              label="Pesquisar"
              value={searchValue}
              onChange={(e) =>
                onSearchValueChange(e.target.value)
              }
              sx={{
                backgroundColor: '#f5f5f5'
              }}
            />
          </Stack>
        </Box>
      )}
      

      <Box sx={{ display: 'flex', gap: 1, p: 1, minwidth: '40%', alignItems: 'right', justifyContent: 'right' }}>
        {actions && actions.map((action, index) => (
          <Button
            key={index}
            onClick={action.onClick}
            startIcon={action.icon}
            variant="contained"
            size="small"
            sx={{ background: 'linear-gradient(135deg, #6e9662 0%, #4a6343 100%)' }}
          >
            {action.description}
          </Button>
        ))}
        
      </Box>
        

    </Box>
  );
}