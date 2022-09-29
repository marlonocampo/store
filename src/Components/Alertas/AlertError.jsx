import { Slide, Snackbar, Alert } from "@mui/material";
import React from "react";

export default function AlertError({ Open, setOpen, msj }) {
    const Close = () => {
        setOpen(false);
    };
    return (
        <Slide direction="right" in={Open}>
            <Snackbar
                sx={{ marginTop: 7 }}
                open={Open}
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
                autoHideDuration={3000}
                transitionDuration={500}
                onClose={Close}
            >
                <Alert
                    variant="filled"
                    elevation={4}
                    onClose={Close}
                    severity="error"
                    sx={{ width: "100%" }}
                >
                    {msj}
                </Alert>
            </Snackbar>
        </Slide>
    );
}
