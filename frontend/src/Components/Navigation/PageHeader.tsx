import {
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BreadcrumbsHeader from "./BreadcrumbsHeader";
import type { PageHeaderProps } from "../../Interface/PageHeader/PageHeaderProps";

export default function PageHeader({
  title,
  actions,
  searchField,
  searchValue,
  onSearchFieldChange,
  onSearchValueChange,
  searchOptions,
  breadcrumbs,
}: PageHeaderProps) {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        flexWrap: "wrap",
        p: 1,
        paddingTop: { xs: 4, md: 0 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        {" "}
        {isMobile ? null : (
          <BreadcrumbsHeader breadcrumbs={breadcrumbs ? breadcrumbs : []} />
        )}
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>
      </Box>
      {searchOptions && onSearchFieldChange && onSearchValueChange && (
        <Box
          sx={{
            p: 1,
            minWidth: "30%",
          }}
        >
          <Stack direction="row" spacing={2}>
            <TextField
              select
              size="small"
              label="Pesquisar por"
              value={searchField}
              onChange={(e) => onSearchFieldChange(e.target.value)}
              sx={{
                backgroundColor: theme.palette.background.paper,
                minWidth: "30%",
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
              onChange={(e) => onSearchValueChange(e.target.value)}
              sx={{
                backgroundColor: theme.palette.background.paper,
              }}
            />
          </Stack>
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          gap: 1,
          p: 1,
          minwidth: "40%",
          alignItems: "right",
          justifyContent: "right",
        }}
      >
        {actions &&
          actions.map((action, index) => (
            <Button
              key={index}
              onClick={action.onClick}
              startIcon={action.icon}
              variant="contained"
              size="small"
              sx={{
                background:
                  action.background || theme.palette.background.linearGreen,
              }}
            >
              {action.description}
            </Button>
          ))}
      </Box>
    </Box>
  );
}
