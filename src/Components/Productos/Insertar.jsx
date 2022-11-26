import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Grow,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Notificacion from "../Alertas/Notificacion";
import { PlusOne, MonetizationOnOutlined as UsIcon } from "@mui/icons-material";

import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import ListProducto from "./ListProducto";
import { listaProductosApi } from "../../Services/API/ProductoApi";
import { listaCategorias } from "../../Services/API/categoriaApi";
import { validDate } from "../Utils/ValidarFecha";
import { errorInputs, validarFormulario } from "../Utils/validarFormulario";
import { logErrors } from "../Utils/logErrros";
import { resetFormulario } from "../Utils/resetFormulario";
export default function Insertar() {
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [listaProductos, setListaProductos] = useState([]);
  const [accion, setAcccion] = useState(1);
  const [actualizar, setActualizar] = useState(false);

  const [newProducto, setNewProducto] = useState({
    idL: 1,
    nombre: "",
    codigo: "",
    precio: "",
    fechaingreso: "",
    stock: "",
    categoria_id: 0,
    descripcion: "",
  });

  const [validate, setValidate] = useState({
    nombre: false,
    codigo: false,
    precio: false,
    fechaingreso: false,
    stock: false,
    categoria_id: false,
    descripcion: false,
    codigoValido: false,
  });

  const [notificacion, setNotificacion] = useState({
    open: false,
    type: "e",
    msj: "",
  });

  useEffect(() => {
    listaCategorias()
      .then((lc) => setCategorias(lc))
      .catch((error) => {
        logErrors(error);
      });

    setLoading(true);
    listaProductosApi()
      .then((lp) => setProductos(lp))
      .catch((error) => logErrors(error))
      .finally(() => setLoading(false));
  }, [actualizar]);

  const inputChange = (e) => {
    setNewProducto({
      ...newProducto, //ver video operador spread
      [e.target.name]: e.target.value,
    });
  };

  const handleDate = (value) => {
    setValidate({ ...validate, fechaingreso: validDate(value) });
    setNewProducto({ ...newProducto, fechaingreso: value });
  };

  const errorInput = (prop) => {
    setValidate({ ...validate, [prop]: errorInputs(newProducto[prop]) });
  };

  const validarDatosFormulario = () => {
    const [formularioValido, camposNoValidos] = validarFormulario(
      [newProducto],
      listaProductos,
      productos
    );

    if (!formularioValido) {
      setNotificacion({
        ...notificacion,
        type: "e",
        open: true,
        msj: "Campos Inválidos!",
      });
      setValidate(camposNoValidos);
      return false;
    }
    setNewProducto({ ...newProducto, idL: newProducto.idL + 1 });
    return true;
  };

  const resetFormulario = () => {
    for (const name in newProducto) {
      if (name === "idL") continue;
      setNewProducto({ ...newProducto, [name]: "" });
    }
  };

  const anadir = (form) => {
    form.preventDefault();

    // if (validarDatosFormulario()) {
    //   setListaProductos([...listaProductos, newProducto]);
    //   setAcccion(2);
    // }
  };

  return (
    <>
      <Grid item xs={12} sm={10} md={4} lg={4} xl={3}>
        <Grow in={true} timeout={150}>
          <Card sx={{ margin: 2, overflow: "auto" }}>
            <CardContent>
              <form onSubmit={anadir}>
                <Typography
                  marginBottom={1}
                  variant='h6'
                  fontWeight={600}
                  color='primary.main'
                  align='center'
                >
                  Agregar Productos <br />
                </Typography>
                <Grid
                  container
                  spacing={2}
                  paddingX={3}
                  justifyContent='center'
                >
                  <Grid item xs={12} lg={12}>
                    <TextField
                      onChange={inputChange}
                      name='nombre'
                      onBlur={() => errorInput("nombre")}
                      error={validate.nombre}
                      fullWidth
                      label='Nombre'
                      margin='dense'
                      variant='outlined'
                      placeholder='Nombre del artículo'
                      size='normal'
                      inputProps={{ maxLength: 19 }}
                    />
                  </Grid>

                  <Grid item xs={6} sm={6} md={6} lg={6}>
                    <TextField
                      name='codigo'
                      onChange={inputChange}
                      onBlur={() => errorInput("codigo")}
                      error={validate.codigo}
                      helperText={
                        validate.codigo === "existe"
                          ? "Código Existente!"
                          : false
                      }
                      fullWidth
                      sx={{ borderRadius: 4 }}
                      margin='none'
                      variant='outlined'
                      label='Código'
                      size='small'
                      inputProps={{ maxLength: 9 }}
                    ></TextField>
                  </Grid>

                  <Grid item xs={6} sm={6} md={6} lg={6}>
                    <TextField
                      name='precio'
                      onChange={inputChange}
                      onBlur={() => errorInput("precio")}
                      error={validate.precio}
                      fullWidth
                      margin='none'
                      variant='outlined'
                      label='precio'
                      size='small'
                      type='number'
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <UsIcon />
                          </InputAdornment>
                        ),
                      }}
                    ></TextField>
                  </Grid>

                  <Grid item xs={6} sm={6} md={6} lg={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        value={newProducto.fechaingreso}
                        name='fechaingreso'
                        label='Fecha'
                        inputFormat='dd/MM/yyyy'
                        onChange={handleDate}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            onBlur={() => errorInput("fechaingreso")}
                            error={validate.fechaingreso}
                            margin='none'
                            fullWidth
                            variant='outlined'
                            size='small'
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Grid>

                  <Grid item xs={6} sm={6} md={6} lg={6}>
                    <TextField
                      name='stock'
                      onChange={inputChange}
                      onBlur={() => errorInput("stock")}
                      error={validate.stock}
                      fullWidth
                      margin='none'
                      variant='outlined'
                      label='Stock'
                      size='small'
                      type='number'
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <TextField
                      onChange={inputChange}
                      name='categoria_id'
                      value={newProducto.categoria_id}
                      onBlur={() => errorInput("categoria_id")}
                      error={validate.categoria_id}
                      fullWidth
                      select
                      variant='outlined'
                      size='small'
                      label='Categoría'
                      margin='none'
                    >
                      <MenuItem selected value={0}>
                        Selecione una categoría...
                      </MenuItem>
                      {categorias.length > 0
                        ? categorias.map((cat) => (
                            <MenuItem key={cat.id} value={cat.id}>
                              {cat.nombre}
                            </MenuItem>
                          ))
                        : null}
                    </TextField>
                  </Grid>

                  <Grid item xs={12} lg={12}>
                    <TextField
                      name='descripcion'
                      onChange={inputChange}
                      onBlur={() => errorInput("descripcion")}
                      error={validate.descripcion}
                      fullWidth
                      variant='outlined'
                      multiline
                      rows={3}
                      size='small'
                      label='Descripción del artículo'
                      margin='none'
                      type='text'
                      inputProps={{ maxLength: 50 }}
                    ></TextField>
                  </Grid>
                </Grid>
                <Grid display='flex' justifyContent='center' padding={2}>
                  <Button
                    sx={{
                      boxShadow: 5,
                    }}
                    variant='contained'
                    size='large'
                    startIcon={<PlusOne color='white' />}
                    type={"submit"}
                  >
                    Añadir
                  </Button>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grow>
      </Grid>
      <Grid item xs={12} md={8} lg={7} xl={7}>
        <ListProducto
          productos={productos ? productos : []}
          accion={accion}
          setAccion={setAcccion}
          listaProductos={listaProductos.length > 0 ? listaProductos : []}
          setListaProductos={setListaProductos}
          categorias={categorias}
          actualizar={actualizar}
          setActualizar={setActualizar}
          load={{ loading, setLoading }}
        />
        <Notificacion notificacion={notificacion} setOpen={setNotificacion} />
      </Grid>
    </>
  );
}
