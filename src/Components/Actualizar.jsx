import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
export default function Actualizar() {
    return (
        <>
            <Slide direction="down" in={true}>
                <div>
                    <Dialog
                        open={true}
                        keepMounted
                    >
                        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                Let Google help apps determine location. This means sending anonymous
                                location data to Google, even when no apps are running.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button>Cerrar</Button>
                        </DialogActions>
                    </Dialog>

                </div>
            </Slide>
        </>
    );
}
