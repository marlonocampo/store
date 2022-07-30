import React, {useRef} from "react";
import {Card, CardContent, Grid, Slide, Typography} from "@mui/material";
import CardsButton from "../Components/Personalizacion/CardsButton";
import TablaDisponibles from "./TablaDisponibles";

export default function Home() {
    return (
        <Grid container spacing={2} justifyContent='center' alignItems='space-evenly' padding={2}>
            <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                <Card sx={{background: 'white', boxShadow: 0, overflow: 'auto'}}>
                    <CardContent sx={{padding: 3}}>
                        <Typography variant='h6' margin={1} fontWeight={600}>
                            Administración
                        </Typography>
                        <Grid container spacing={2} flex justifyContent='center'
                        >
                            <Grid item lg={4} md={4} sm={4} xs={12}>
                                <CardsButton titulo={'Productos'}/>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={12}>
                                <CardsButton titulo={'Ventas'}/>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={12}>
                                <CardsButton titulo={'Facturas'}/>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                <Card sx={{background: 'white', boxShadow: 0, overflow: 'auto'}}>
                    <CardContent sx={{padding: 3}}>
                        <Typography variant='h6' margin={1} fontWeight={600} color='primary.main'>
                            Disponibles
                        </Typography>
                        <TablaDisponibles/>
                    </CardContent>

                </Card>
            </Grid>
        </Grid>
    )
}


/*
*/
