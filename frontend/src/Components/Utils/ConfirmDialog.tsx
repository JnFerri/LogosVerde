import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useTheme,
} from "@mui/material";

interface ConfirmDialogProps {
  open: boolean;
  title?: string;
  message: string;
  onConfirm: () => void;
  onClose: () => void;
}

export function ConfirmDialog({
  open,
  title = "Confirmação",
  message,
  onConfirm,
  onClose,
}: ConfirmDialogProps) {
  const theme = useTheme();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={onClose}
          sx={{
            background: theme.palette.error.main,
            color: theme.palette.text.secondary,
          }}
        >
          Cancelar
        </Button>

        <Button
          variant="contained"
          onClick={onConfirm}
          sx={{
            background: theme.palette.success.main,
            color: theme.palette.text.secondary,
          }}
        >
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
