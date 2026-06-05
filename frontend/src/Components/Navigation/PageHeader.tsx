import { Box, Button, MenuItem, Stack, TextField, Typography } from "@mui/material";
import type { SearchOption } from "../../Interface/SearchOptions";

export interface HeaderActions {
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}



export interface PageHeaderProps{
  title: string;
  actions?: HeaderActions[];
  searchField?: string;
  searchValue?: string;
  onSearchFieldChange?: (value: string) => void;
  onSearchValueChange?: (value: string) => void;
  searchOptions?: SearchOption[];
}

export default function PageHeader({
  title,
  actions,
  searchField,
  searchValue,
  onSearchFieldChange,
  onSearchValueChange,
  searchOptions,
}: PageHeaderProps) {
  return (
    
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width:'100%',
          flexWrap:'wrap',
          p:1,
          backgroundColor: '#d6b696',
        }}
        
      >
        <Typography variant="h3" sx={{
          color:'white',
          fontWeight:'bold'
        }}>
          {title}
        </Typography>
        {searchOptions && searchField && searchValue && onSearchFieldChange && onSearchValueChange && (
        <Box sx={{
          p:1,
          minWidth:'30%'
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
          backgroundColor:'#f5f5f5',
          minWidth:'30%'
        }}
      >
        {searchOptions.map((option) => (
          <MenuItem  key={option.value} value={option.value}>
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
          backgroundColor:'#f5f5f5'
        }}
      />
    </Stack>
        </Box>
      )}
        
        <Box sx={{ display: 'flex', gap: 1, p:1, minwidth:'50%', alignItems:'right', justifyContent:'right' }}>
          {actions && actions.map((action, index) => (
            <Button 
              key={index} 
              onClick={action.onClick} 
              startIcon={action.icon}
              variant="contained"
              size="small"
              sx={{ background: 'linear-gradient(135deg, #6e9662 0%, #4a6343 100%)'}}
            >
              {action.description}
            </Button>
          ))}
        </Box>

      
    </Box>
  );
}