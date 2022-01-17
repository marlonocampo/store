import React from "react";
import {Button, CardMedia, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import imgVentas from "../Media/ventas.png";
import imgProductos from "../Media/ventas.png";
import imgFacturas from "../Media/facturas.png";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles({
    styleButton: {
        display: 'block',
        color: 'white',
        padding: 20,
        "&:hover": {backgroundColor: (css) => css.hov},
        backgroundColor: (css) => css.bg,
    },
    styleA: {
        textDecoration: 'none'
    }
})

export default function CardsButton({titulo}) {
    let css;
    if (titulo === 'Productos') {
        css = {bg: '#ff972f', hov: '#EE8114FF'}
    } else if (titulo === 'Ventas') {
        css = {bg: '#1db9ff', hov: '#0D8AC2FF'}
    } else if (titulo === 'Facturas') {
        css = {bg: '#34ea96', hov: '#14B96EFF'}
    }
    const classes = useStyles(css)

    return (
        <>
            <NavLink to={`/${titulo}`} className={classes.styleA}>
                <Button variant='text' className={classes.styleButton}
                        sx={{
                            boxShadow: 8
                        }}
                >
                    <CardMedia
                        sx={{maxWidth: '100%'}}
                        component='img'
                        image={titulo === 'Productos' ? imgProductos :
                            titulo === 'Ventas' ? imgVentas :
                                titulo === 'Facturas' ? imgFacturas :
                                    null
                        }
                    >
                    </CardMedia>

                    <Typography variant='button' color='white'>
                        {titulo}
                    </Typography>
                </Button>
            </NavLink>
        </>
    )
}