import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import {DialogActions, DialogContent, FormControl, TextField, Grid, MenuItem} from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import useStore from "../../Stores/formContext";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {LocalizationProvider} from "@mui/lab";
import {useState} from "react";
import DatePicker from "@mui/lab/DatePicker";
import {PublishedWithChanges} from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function ModalActualizar({Datos}) {
    const {newDatos, setNewDatos, categorias} = Datos;
    const {dialog, closeDialog} = useStore();
    const [date, setDate] = useState(null);

    const cambioFecha = (fecha) => {
        setDate(fecha);
    }

    const valueInputs = (event) => {
            setNewDatos({...newDatos,
            [event.target.name] : event.target.value}
        )
    }

    return (
        <>
            <Dialog
                open={dialog}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
                maxWidth='sm'
                fullWidth={true}
            >
                <DialogTitle sx={{p: 3}}> Actualizar Información del artículo</DialogTitle>
                <DialogContent dividers>
                    <Grid
                        gridTemplateColumns="repeat(12, 1fr)"
                        gap={2}
                        sx={{display: 'grid', ml: 3, mr: 3, mb: 3}}
                    >
                        <Grid gridColumn="span 12">
                            <FormControl fullWidth>
                                <TextField
                                    onChange={valueInputs}
                                    value={newDatos.nombre}
                                    name={'nombre'}
                                    variant="filled"
                                    size="small"
                                    label="Nombre del producto"
                                    margin="dense">
                                </TextField>
                            </FormControl>
                        </Grid>
                        <Grid gridColumn="span 6">
                            <FormControl fullWidth>
                                <TextField
                                    onChange={valueInputs}
                                    value={newDatos.codigo}
                                    name='codigo'
                                    variant="filled"
                                    type='text'
                                    size="small"
                                    fullWidth
                                    label="Código"
                                    margin="dense">
                                </TextField>
                            </FormControl>
                        </Grid>
                        <Grid gridColumn="span 6">
                            <FormControl fullWidth>
                                <TextField
                                    onChange={valueInputs}
                                    value={newDatos.precio}
                                    name='precio'
                                    variant="filled"
                                    type='number'
                                    size="small"
                                    fullWidth
                                    label="Precio"
                                    margin="dense">
                                </TextField>
                            </FormControl>
                        </Grid>
                        <Grid gridColumn="span 6">
                            <FormControl fullWidth>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        value={newDatos.fechaingreso}
                                        name='fecha'
                                        label="Fecha"
                                        inputFormat='dd/MM/yyyy'
                                        onChange={cambioFecha}

                                        renderInput={(params) => <TextField
                                            {...params}
                                            error={false}
                                            margin='dense'
                                            fullWidth
                                            variant='filled'
                                            size='small'
                                        />}
                                    />
                                </LocalizationProvider>
                            </FormControl>
                        </Grid>
                        <Grid gridColumn="span 6">
                            <FormControl fullWidth>
                                <TextField
                                    onChange={valueInputs}
                                    value={newDatos.stock}
                                    name='stock'
                                    variant="filled"
                                    type='number'
                                    size="small"
                                    fullWidth
                                    label="Stock"
                                    margin="dense"
                                >
                                </TextField>
                            </FormControl>
                        </Grid>
                        <Grid gridColumn="span 12">
                            <FormControl fullWidth>
                                < TextField
                                    onChange={valueInputs}
                                    value={`${newDatos.categoria_id}`}
                                    name="categoria_id"
                                    error={false}
                                    fullWidth
                                    select
                                    variant='filled'
                                    size="small"
                                    label="Categoría"
                                    margin='dense'
                                >
                                    <MenuItem key={0} value={0}>Selecione una categoría...</MenuItem>
                                    {categorias.length > 0 ?
                                        categorias.map((cat) => (
                                            <MenuItem key={cat.id} value={cat.id}>
                                                {cat.nombrecategoria}
                                            </MenuItem>
                                    )) : null}
                                </TextField>
                            </FormControl>
                        </Grid>
                        <Grid gridColumn="span 12">
                            <FormControl fullWidth>
                                < TextField
                                    onChange={valueInputs}
                                    value={newDatos.descripcion}
                                    name="descripcion"
                                    error={false}
                                    fullWidth
                                    variant='filled'
                                    size="small"
                                    label="Descripción"
                                    margin='dense'
                                    multiline
                                    rows={3}
                                >
                                </TextField>
                            </FormControl>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions sx={{p: 3, display: 'flex', justifyContent: 'start'}}>
                    <Button
                        sx={{boxShadow: 5, overflow: 'hidden', color: 'white'}}
                        variant='contained'
                        color='secondary'
                        size="large"
                        type='submit'
                        onClick={() => closeDialog()}
                    >
                        Cancelar
                    </Button>

                    <Button
                        sx={{boxShadow: 5, overflow: 'hidden'}}
                        variant="contained"
                        size="large"
                        type='submit'
                        onClick={() => closeDialog()}
                        startIcon={<PublishedWithChanges color='white'/>}
                    >
                        Actualizar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
