import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import Home from "./Views/Home";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import themeStore from "./Styles/Theme/ThemeStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Productos from "./Views/Productos";
import Facturas from "./Views/Facturas";
import Ventas from "./Views/Ventas";
import App from "./Views/App";
import NotFound from "./Views/NotFound";
import { SnackbarProvider } from 'notistack';

let theme = createTheme();
theme = responsiveFontSizes(themeStore);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={2}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="Productos" element={<Productos />} />
              <Route path="Ventas" element={<Ventas />} />
              <Route path="Facturas" element={<Facturas />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
  ;
