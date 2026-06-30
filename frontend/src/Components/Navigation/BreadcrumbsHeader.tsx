import { Breadcrumbs, Link, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import type { breadcrumbs } from "../../Interface/PageHeader/breadcrumbs";

const BreadcrumbsHeader = ({ breadcrumbs }: { breadcrumbs: breadcrumbs[] }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
      {breadcrumbs?.map((item, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return isLast || !item.path ? (
          <Typography
            key={item.label}
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: "bold",
            }}
          >
            {item.label}
          </Typography>
        ) : (
          <Link
            key={item.label}
            component="button"
            underline="hover"
            color={theme.palette.text.secondary}
            onClick={() => navigate(item.path!)}
          >
            {item.label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumbsHeader;
