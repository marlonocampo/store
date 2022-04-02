import {Slide, Snackbar, Alert} from "@mui/material";
import React from "react";

export default function AlertSucces({Open, setOpen, mensaje, type}) {
    const Close = () => {
        setOpen(false)
    }

    return (
        <Slide direction='left' in={Open}>
            <Snackbar sx={{marginTop: 7}} open={Open} anchorOrigin={{vertical: 'top', horizontal: "right"}}
                      autoHideDuration={3000} transitionDuration={500} onClose={Close}>
                <Alert variant='filled' elevation={4} onClose={Close} severity={type} sx={{width: '100%'}}>
                    {mensaje}
                </Alert>
            </Snackbar>
        </Slide>
    );
}



