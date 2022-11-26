import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import {
  DialogActions,
  DialogContent,
  FormControl,
  TextField,
  Grid,
  MenuItem,
} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import useStore from "../../Stores/formContext";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider } from "@mui/lab";
import { useState } from "react";
import DatePicker from "@mui/lab/DatePicker";
import { PublishedWithChanges } from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />;
});

export default function ModalActualizar({
  editDatos,
  setEditDatos,
  categorias,
}) {
  const { dialog, closeDialog } = useStore();
  const [date, setDate] = useState(null);

  const handledFecha = (fecha) => {
    setDate(fecha);
  };

  const valueInputs = (event) => {
    setEditDatos({
      ...editDatos,
      [event.target.name]: event.target.value,
    });
  };
  const Actualizar = () => {};

  return (
    <>
      <Dialog
        open={dialog}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby='alert-dialog-slide-description'
        maxWidth='sm'
        fullWidth={true}
      >
        <DialogTitle sx={{ p: 3 }}>
          {" "}
          Actualizar Información del artículo {`- ${editDatos.nombre}`}
        </DialogTitle>
        <DialogContent dividers>
          <Grid
            gridTemplateColumns='repeat(12, 1fr)'
            gap={2}
            sx={{ display: "grid", ml: 3, mr: 3, mb: 3 }}
          >
            <Grid gridColumn='span 12'>
              <FormControl fullWidth>
                <TextField
                  onChange={valueInputs}
                  value={editDatos.nombre}
                  name={"nombre"}
                  variant='outlined'
                  size='small'
                  label='Nombre del producto'
                  margin='dense'
                ></TextField>
              </FormControl>
            </Grid>
            <Grid gridColumn='span 6'>
              <FormControl fullWidth>
                <TextField
                  onChange={valueInputs}
                  value={editDatos.codigo}
                  name='codigo'
                  variant='outlined'
                  type='text'
                  size='small'
                  fullWidth
                  label='Código'
                  margin='dense'
                ></TextField>
              </FormControl>
            </Grid>
            <Grid gridColumn='span 6'>
              <FormControl fullWidth>
                <TextField
                  onChange={valueInputs}
                  value={editDatos.precio}
                  name='precio'
                  variant='outlined'
                  type='number'
                  size='small'
                  fullWidth
                  label='Precio'
                  margin='dense'
                ></TextField>
              </FormControl>
            </Grid>
            <Grid gridColumn='span 6'>
              <FormControl fullWidth>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={editDatos.fechaingreso}
                    name='fechaingreso'
                    label='Fecha'
                    inputFormat='dd/MM/yyyy'
                    onChange={handledFecha}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        error={false}
                        margin='dense'
                        fullWidth
                        variant='outlined'
                        size='small'
                      />
                    )}
                  />
                </LocalizationProvider>
              </FormControl>
            </Grid>
            <Grid gridColumn='span 6'>
              <FormControl fullWidth>
                <TextField
                  onChange={valueInputs}
                  value={editDatos.stock}
                  name='stock'
                  variant='outlined'
                  type='number'
                  size='small'
                  fullWidth
                  label='Stock'
                  margin='dense'
                ></TextField>
              </FormControl>
            </Grid>
            <Grid gridColumn='span 12'>
              <FormControl fullWidth>
                <TextField
                  onChange={valueInputs}
                  value={`${editDatos.categoria_id}`}
                  name='categoria_id'
                  error={false}
                  fullWidth
                  select
                  variant='outlined'
                  size='small'
                  label='Categoría'
                  margin='dense'
                >
                  <MenuItem value={0}>Selecione una categoría...</MenuItem>
                  {categorias.length > 0
                    ? categorias.map((cat) => (
                        <MenuItem key={cat.id} value={cat.id}>
                          {cat.nombrecategoria}
                        </MenuItem>
                      ))
                    : null}
                </TextField>
              </FormControl>
            </Grid>
            <Grid gridColumn='span 12'>
              <FormControl fullWidth>
                <TextField
                  onChange={valueInputs}
                  value={editDatos.descripcion}
                  name='descripcion'
                  error={false}
                  fullWidth
                  variant='outlined'
                  size='small'
                  label='Descripción'
                  margin='dense'
                  multiline
                  rows={3}
                ></TextField>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ p: 3, display: "flex", justifyContent: "start" }}>
          <Button
            sx={{ boxShadow: 5, overflow: "hidden", color: "white" }}
            variant='contained'
            color='secondary'
            type='submit'
            onClick={() => closeDialog()}
          >
            Cancelar
          </Button>

          <Button
            sx={{ boxShadow: 5, overflow: "hidden" }}
            variant='contained'
            type='submit'
            onClick={Actualizar}
            startIcon={<PublishedWithChanges color='white' />}
          >
            Actualizar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
