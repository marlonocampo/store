import React from "react";
import {Grid} from "@mui/material";

export default function Home(){
    return(
        <>
            <Grid container spacing={2}
                  sx={{background: '#ebf0ff', minHeight: '100vh'}}
                  flex justifyContent='center' alignItems='flex-start'
                  padding={3}
            >
                <Grid item lg={8} md={8} sm={8} xs={12} borderRadius={4}
                      sx={{background: 'white', minHeight: '45vh', color: 'primary.main'}}
                >
                    Marlon
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12} borderRadius={4} overflow='hidden'
                    sx={{background: 'white',  minHeight: '45vh', color: 'primary.main'}}
                >
                    Ocampo
                </Grid>
            </Grid>
        </>
    )
}