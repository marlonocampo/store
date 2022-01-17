import React, {useRef, useState} from 'react';
import {Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, Slide} from "@mui/material";

export default function InsertModal({open}) {
    const containerRef = useRef(null);
    return (
        <>
            <Slide direction='up' in={false} container={containerRef.current}>
                <Card>
                    <Dialog
                        open={open}
                        keepMounted
                    >
                        <DialogTitle>
                            Insertar Productos
                        </DialogTitle>
                        <DialogContent>
                            Aquí va el contenido de nuestro modal
                        </DialogContent>
                        <DialogActions>
                        </DialogActions>
                    </Dialog>
                </Card>
            </Slide>
        </>
    );
}
