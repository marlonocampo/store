import { Slide, Snackbar, Alert } from "@mui/material";
import React from "react";

export default function Notificacion({ notificacion, setOpen }) {
  const Close = () => {
    setOpen({ ...notificacion, open: false });
  };

  const tipoError = {
    e: "error",
    w: "warning",
    s: "success",
  };

  return (
    <Slide direction='right' in={notificacion.open}>
      <Snackbar
        open={notificacion.open}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        autoHideDuration={2000}
        transitionDuration={300}
        onClose={Close}
      >
        <Alert
          variant='filled'
          elevation={10}
          onClose={Close}
          severity={tipoError[notificacion.type]}
        >
          {notificacion.msj}
        </Alert>
      </Snackbar>
    </Slide>
  );
}
