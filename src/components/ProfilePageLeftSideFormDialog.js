import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useDispatch } from 'react-redux';

export default function FormDialog() {
  const dispatch = useDispatch();
  const [biographyText, setBiographyText] = React.useState("");

  const [open, setOpen] = React.useState(false);

  const addBiography = () => {
      console.log("add");
      dispatch({
        type: "CREATEBIOGRAPHY",
        payload: { text: biographyText },
      });
    };
    const setHandleInput = (ev) => {
      setBiographyText(ev.target.value.trim());
    };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        sx={{
          color: "black",
          backgroundColor: "#e4e6eb",
          fontFamily: "Segoe UI",
          fontSize: "12px",
          fontWeight: "600",
          width: "366px",
          "&hover": { backgroundColor: "#d8d8d8" },
        }}
        // variant="outlined"

        onClick={handleClickOpen}
      >
        Редактиране на биографията
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField
            onChange={setHandleInput}
            sx={{ width: "300px" }}
            autoFocus
            margin="dense"
            id="name"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: "black" }} onClick={handleClose}>
            Отказ
          </Button>
          <Button
            sx={{ color: "black" }}
            onClick={() => {
              addBiography();
              handleClose();
            }}
          >
            Запис
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
