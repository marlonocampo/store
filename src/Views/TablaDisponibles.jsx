import React, {useRef, useState} from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import SearchIcon from '@mui/icons-material/Search';
import {InputAdornment, Slide, TextField} from "@mui/material";
import {useSearchParams} from "react-router-dom";

const columns = [
    {id: '1', label: 'Id', minWidth: 20},
    {id: '2', label: 'Nombre', minWidth: 100},
    {id: '3', label: 'Precio', minWidth: 60},
];
const rows = [
    {id: '1', nombre: 'Camisa', precio: 3003},
    {id: '2', nombre: 'Pantalón', precio: 3031},
    {id: '3', nombre: 'Gorra', precio: 200},

];

export default function TablaDisponibles() {
    const containerRef = useRef(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [filter, setFilter] = useSearchParams();
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeInputFilter = (e) => {
        let filter = e.target.value;
        if (filter) {
            setFilter({filter})
        } else {
            setFilter({})
        }
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

    return (
        <>
            <TextField
                name="buscar"
                onChange={handleChangeInputFilter}
                value={filter.get('filter') || ''}
                sx={{width: "100%"}}
                margin='dense'
                variant="outlined"
                label="Productos Disponibles"
                placeholder="Nombre Producto"
                size="normal"
                type="search"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon/>
                        </InputAdornment>
                    )
                }}
            />
            <Paper elevation={2} sx={{width: '100%', overflow: 'hidden', marginTop: 1, borderRadius: "15px"}}>
                <TableContainer>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        sx={{bgcolor: '#273565', border: 0, color: 'white', padding: 1}}
                                        key={column.id}
                                        align="left"
                                        style={{minWidth: column.minWidth}}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((dato) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={dato.id}>
                                            <TableCell align='left'>
                                                {dato.id}
                                            </TableCell>
                                            <TableCell align='left'>
                                                {dato.nombre}
                                            </TableCell>
                                            <TableCell align='left'>
                                                {`C$ ${dato.precio}`}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    lag={'esp'}
                    sx={{background: 'white', width: '100%'}}
                    rowsPerPageOptions={[5, 10]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    )
        ;
}