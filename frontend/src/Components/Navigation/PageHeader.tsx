import { Box, Button, MenuItem, Stack, TextField, Typography } from "@mui/material";
import type { SearchOption } from "../../Interface/SearchOptions";

export interface HeaderActions {
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}



export interface PageHeaderProps<T> {
  title: string;
  actions?: HeaderActions[];
  searchField: string;
  searchValue: string;
  onSearchFieldChange: (value: string) => void;
  onSearchValueChange: (value: string) => void;
  searchOptions?: SearchOption<T>[];
}

export default function PageHeader<T>({
  title,
  actions,
  searchField,
  searchValue,
  onSearchFieldChange,
  onSearchValueChange,
  searchOptions,
}: PageHeaderProps<T>) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        
      >
        <Typography variant="h3">
          {title}
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          {actions && actions.map((action, index) => (
            <Button 
              key={index} 
              onClick={action.onClick} 
              startIcon={action.icon}
              variant="contained"
            >
              {action.description}
            </Button>
          ))}
        </Box>
      </Box>

      {searchOptions && (
        <Box >
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
      />
    </Stack>
        </Box>
      )}
    </Box>
  );
}