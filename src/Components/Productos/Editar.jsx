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
import { actualizarProducto } from "../../Services/API/ProductoApi";
import { errorInputs, validiarObjeto } from "../Utils/validarFormulario";
import { validDate } from "../Utils/ValidarFecha";
import Notificacion from "../Alertas/Notificacion";
import { LoadingBtn } from "../Personalizacion/LoadingBtn";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />;
});

export default function ModalActualizar({
  editDatos,
  setEditDatos,
  categorias,
  nombreTemp,
  productos,
  actualizar,
  setActualizar,
}) {
  const { dialog, closeDialog } = useStore();
  const [loadingButton, setLoadingButton] = useState(false);
  const [notificacion, setNotificacion] = useState({
    open: false,
    type: "e",
    msj: "",
  });

  const [validate, setValidate] = useState({
    nombre: false,
    codigo: false,
    precio: false,
    fechacreacion: false,
    stock: false,
    categoria_id: false,
    descripcion: false,
    codigoValido: false,
  });

  const handledFecha = (value) => {
    setValidate({ ...validate, fechacreacion: validDate(value) });
    setEditDatos({ ...editDatos, fechacreacion: value });
  };

  const valueInputs = (event) => {
    setEditDatos({
      ...editDatos,
      [event.target.name]: event.target.value,
    });
  };

  const actualizarEnBd = (form) => {
    form.preventDefault();
    form.target.reset();
    if (validarDatosActualizar()) {
      setLoadingButton(true);
      actualizarProducto(editDatos).then((res) => {
        setNotificacion({
          ...notificacion,
          type: "s",
          open: true,
          msj: res.msj,
        });
        setLoadingButton(false);
        setActualizar(!actualizar);
        closeDialog();
      });
    }
  };

  const errorInput = (prop) => {
    setValidate({ ...validate, [prop]: errorInputs(editDatos[prop]) });
  };

  const validarDatosActualizar = () => {
    const [datosValidos, camposNoValidos] = validiarObjeto(
      editDatos,
      productos
    );

    if (!datosValidos) {
      setNotificacion({
        ...notificacion,
        type: "e",
        open: true,
        msj: "Campos Inválidos!",
      });
      setValidate(camposNoValidos);
      return false;
    }
    return true;
  };

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
          Actualizar Información del artículo {`- ${nombreTemp}`}
        </DialogTitle>
        <DialogContent dividers>
          <form onSubmit={actualizarEnBd} id={"formEditar"}>
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
                    error={validate.nombre}
                    onBlur={() => errorInput("nombre")}
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
                    error={validate.codigo}
                    onBlur={() => errorInput("codigo")}
                    name='codigo'
                    variant='outlined'
                    type='text'
                    size='small'
                    fullWidth
                    label='Código'
                    margin='dense'
                    helperText={
                      validate.codigo === "existe" ? "Código Existente!" : false
                    }
                  ></TextField>
                </FormControl>
              </Grid>
              <Grid gridColumn='span 6'>
                <FormControl fullWidth>
                  <TextField
                    onChange={valueInputs}
                    value={editDatos.precio}
                    error={validate.precio}
                    onBlur={() => errorInput("precio")}
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
                      value={editDatos.fechacreacion}
                      name='fechacreacion'
                      label='Fecha'
                      inputFormat='dd/MM/yyyy'
                      onChange={handledFecha}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          error={validate.fechacreacion}
                          onBlur={() => errorInput("fechacreacion")}
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
                    error={validate.stock}
                    value={editDatos.stock}
                    onBlur={() => errorInput("stock")}
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
                    error={validate.categoria_id}
                    onBlur={() => errorInput("categoria_id")}
                    fullWidth
                    select
                    variant='outlined'
                    size='small'
                    label='Categoría'
                    margin='dense'
                    defaultValue={editDatos.idcategoria}
                  >
                    <MenuItem key={"0"} value='0'>
                      Selecione una categoría...
                    </MenuItem>
                    {categorias.length > 0
                      ? categorias.map((categoria) => (
                          <MenuItem
                            key={`${categoria.idcategoria}`}
                            value={categoria.idcategoria}
                          >
                            {categoria.nombre}
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
                    error={validate.descripcion}
                    onBlur={() => errorInput("descripcion")}
                    name='descripcion'
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
          </form>
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
          {loadingButton ? (
            <LoadingBtn
              variant='contained'
              estilos={{ boxShadow: 5, overflow: "hidden" }}
            />
          ) : (
            <Button
              sx={{ boxShadow: 5, overflow: "hidden" }}
              variant='contained'
              type='submit'
              form='formEditar'
              startIcon={<PublishedWithChanges color='white' />}
            >
              Actualizar
            </Button>
          )}
        </DialogActions>
      </Dialog>
      <Notificacion notificacion={notificacion} setOpen={setNotificacion} />
    </>
  );
}
