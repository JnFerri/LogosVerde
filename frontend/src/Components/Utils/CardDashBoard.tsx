import { Box, Typography, useTheme } from "@mui/material";

const CardDashBoard = ({
  Icon,
  title,
  value,
}: {
  Icon: React.ElementType;
  title: string;
  value: React.ReactNode;
}) => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 2,
          p: 2,
          borderRadius: 2,
          backgroundColor: theme.palette.background.cream,
          boxShadow: 1,
        }}
      >
        <Box
          sx={{
            background: theme.palette.background.green,
            p: 1,
          }}
        >
          <Icon />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontSize: "12px", color: theme.palette.text.primary }}
          >
            {" "}
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "20px", color: theme.palette.text.primary }}
          >
            {" "}
            {value}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CardDashBoard;
