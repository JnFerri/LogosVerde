import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
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
  onClose
}: ConfirmDialogProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        <DialogContentText>
          {message}
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button 
        onClick={onClose}
        sx={{background:'#ab4141', color:'white'}}>
          Cancelar
        </Button>

        <Button
          variant="contained"
          onClick={onConfirm}
          sx={{background:'linear-gradient(135deg, #6e9662 0%, #4a6343 100%)'}}
        >
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}