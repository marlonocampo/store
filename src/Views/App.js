import React from "react";
import Navbar from "../Styles/Navbar";
import {Outlet} from 'react-router-dom';
import {Grid} from "@mui/material";

function App() {
    return (
        <>
            <Navbar/>
            <Grid container
                  sx={{bgcolor: 'background.default', minHeight: '92vh'}}
            >
                <Outlet />
            </Grid>
        </>
    );
}

export default App;