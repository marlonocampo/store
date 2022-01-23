import React, {useEffect, useState} from 'react';
import {
    Button, Card, CardActions, CardContent, Grid, Grow, InputAdornment, MenuItem, Slide, Snackbar, TextField, Typography
} from "@mui/material";
import {Add, MonetizationOnOutlined} from "@mui/icons-material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import categoriaApi from '../API/categoriaApi'
import productoApi from "../API/ProductoApi";
import ListProducto from "./ListProducto";
import vF from "../ValidarFormulario";
import AlertError from "../AlertError";

export default function InsertProducto() {
    const [productos, setProductos] = useState([]);
    const [date, setDate] = useState(null);
    const [categorias, setCategorias] = useState([])
    const [listaProductos, setListaProductos] = useState([])
    const [accion, setAcccion] = useState(1);
    const [idLocal, setIdLocal] = useState(1);
    const [newProducto, setNewProducto] = useState({
        idL: 0,
        nombre: '',
        codigo: '',
        precio: '',
        fechaingreso: '',
        stock: '',
        categoria_id: 0,
        nombrecategoria: '',
        descripcion: '',
    });

    const [validate, setValidate] = useState({
        nombre: false,
        codigo: false,
        precio: false,
        fechaingreso: false,
        stock: false,
        categoria_id: false,
        descripcion: false,
    });
    let formularioValidado = true;
    const [openAlert, setOpenAlert] = useState(false);

    useEffect(() => {
        async function getCategorias() {
            const lc = await categoriaApi.List();
            setCategorias(lc);
        }

        async function getProductos() {
            setProductos(await productoApi.List())
        }

        getProductos().then(() => console.log("Productos listadas!"))
        getCategorias().then(() => console.log("Categorías Listados!"))
    }, []);

    const inputChange = (event) => {
        setNewProducto({
            ...newProducto, //ver video
            [event.target.name]: event.target.value
        })
    };

    const validar = () => {
        if (newProducto.nombre.length === 0) {
            validate.nombre = true;
            setOpenAlert(true)
            formularioValidado = false;
        }
        if (newProducto.codigo.length === 0) {
            validate.codigo = true;
            setOpenAlert(true)
            formularioValidado = false;
        }
        if (newProducto.precio.length === 0) {
            validate.precio = true;
            formularioValidado = false;
        }
        if (newProducto.fechaingreso.length === 0) {
            validate.fechaingreso = true;
            formularioValidado = false;
        }
        if (newProducto.stock.length === 0) {
            validate.stock = true;
            formularioValidado = false;
        }
        if (newProducto.categoria_id === 0) {
            validate.categoria_id = true;
            formularioValidado = false;
        }
        if (newProducto.descripcion.length === 0) {
            validate.descripcion = true;
            formularioValidado = false;
        }
    }

    const anadir = () => {
        newProducto.fechaingreso = vF.FormatDate({date});
        validar();
        if (formularioValidado === true) {
            setNewProducto({...newProducto, idL: idLocal});
            setIdLocal(idLocal + 1);
            setListaProductos([...listaProductos, newProducto]);
            setAcccion(2);
            //formularioValidado = true
            //setNewProducto({...newProducto,});
        } else {
            validate.categoria_id = true;
        }
    }

    return (
        <>
            <Grid item xs={12} sm={10} md={4} lg={4} xl={4}>
                <Grow in={true} timeout={150}>
                    <Card sx={{margin: 2, overflow: 'auto', paddingBottom: 2}}>
                        <CardContent>
                            <Typography marginBottom={1} variant='h6' fontWeight={600} color='primary.main'
                                        align='center'>
                                Agregar Productos
                            </Typography>
                            <Grid container spacing={2} paddingX={3} justifyContent='center'>
                                <Grid item xs={12} lg={12}>
                                    <TextField
                                        onChange={inputChange}
                                        name='nombre'
                                        onBlur={() => setValidate({
                                            ...validate,
                                            nombre: (newProducto.nombre.length === 0)
                                        })}
                                        error={validate.nombre && newProducto.nombre.length === 0}
                                        fullWidth
                                        label="Nombre"
                                        margin='dense'
                                        variant="outlined"
                                        placeholder="Nombre Producto"
                                        size="normal"
                                        inputProps={{maxLength: 19}}
                                    />
                                </Grid>

                                <Grid item xs={6} sm={6} md={6} lg={6}>
                                    <TextField
                                        name="codigo"
                                        onChange={inputChange}
                                        onBlur={() => setValidate({
                                            ...validate,
                                            codigo: (newProducto.codigo.length === 0)
                                        })}
                                        error={validate.codigo && newProducto.codigo.length === 0}
                                        fullWidth
                                        sx={{borderRadius: 4}}
                                        margin="none"
                                        variant="outlined"
                                        label="Código"
                                        size="small"
                                        inputProps={{maxLength: 9}}
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6}>
                                    <TextField
                                        name="precio"
                                        onChange={inputChange}
                                        onBlur={() => setValidate({
                                            ...validate,
                                            precio: (newProducto.precio.length === 0)
                                        })}
                                        error={validate.precio && newProducto.precio.length === 0}
                                        fullWidth
                                        margin='none'
                                        variant="outlined"
                                        label="precio"
                                        size="small"
                                        type="number"
                                        InputProps={{
                                            endAdornment: (<InputAdornment position="end">
                                                <MonetizationOnOutlined/>
                                            </InputAdornment>)
                                        }}
                                    >
                                    </TextField>
                                </Grid>

                                <Grid item xs={6} sm={6} md={6} lg={6}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            value={date}
                                            name='fecha'
                                            label="Fecha"
                                            inputFormat='dd/MM/yyyy'
                                            onChange={setDate}
                                            renderInput={(params) =>
                                                <TextField
                                                    {...params}
                                                    onBlur={() => setValidate({
                                                        ...validate,
                                                        fechaingreso: (newProducto.fechaingreso.length === 0)
                                                    })}
                                                    error={validate.fechaingreso && newProducto.fechaingreso.length === 0}
                                                    margin='none'
                                                    fullWidth
                                                    variant='outlined'
                                                    size='small'
                                                />
                                            }
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6}>
                                    <TextField
                                        name="stock"
                                        onChange={inputChange}
                                        onBlur={() => setValidate({
                                            ...validate,
                                            stock: (newProducto.stock.length === 0)
                                        })}
                                        error={validate.stock && newProducto.stock.length === 0}
                                        fullWidth
                                        margin='none'
                                        variant="outlined"
                                        label="Stock"
                                        size="small"
                                        type="number"
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} lg={12}>
                                    <TextField
                                        onChange={inputChange}
                                        name="categoria_id"
                                        value={newProducto.categoria_id}
                                        onBlur={() => setValidate({
                                            ...validate,
                                            categoria_id: (newProducto.categoria_id === 0)
                                        })}
                                        error={validate.categoria_id && newProducto.categoria_id === 0}
                                        fullWidth
                                        select
                                        variant='outlined'
                                        size="small"
                                        label="Categoría"
                                        margin='none'
                                    >
                                        <MenuItem value={newProducto.categoria_id}>Selecione una categoría...</MenuItem>
                                        {categorias.map((cat) => (
                                            <MenuItem key={cat.id} value={cat.id}>
                                                {cat.nombrecategoria}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} lg={12}>
                                    <TextField
                                        name='descripcion'
                                        onChange={inputChange} onBlur={() => setValidate({
                                        ...validate,
                                        descripcion: (newProducto.descripcion.length === 0)
                                    })}
                                        error={validate.descripcion && newProducto.descripcion.length === 0}

                                        fullWidth
                                        variant='outlined'
                                        multiline
                                        rows={3}
                                        size="small"
                                        label="Descripción"
                                        margin='none'
                                        type='text'
                                        inputProps={{maxLength: 50}}
                                    >
                                    </TextField>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions sx={{display: 'flex', justifyContent: 'center', paddingX: 3}}>
                            <Button
                                sx={{boxShadow: 5, flexWrap: 'wrap', overflow: 'hidden', width: '75%'}}
                                variant="contained"
                                size="large"
                                startIcon={<Add color='white'/>}
                                type='submit'
                                onClick={() => anadir()}
                            >
                                Añadir
                            </Button>
                        </CardActions>
                    </Card>
                </Grow>
            </Grid>
            <Grid item xs={12} md={8} lg={8}>
                <ListProducto
                    productos={productos ? productos : []}
                    accion={accion}
                    setAccion={setAcccion}
                    listaProductos={listaProductos.length > 0 ? listaProductos : []}
                    setListaProductos={setListaProductos}
                    categorias={categorias}
                />
                <AlertError Open={openAlert} setOpen={setOpenAlert}/>
            </Grid>
        </>
    )
}