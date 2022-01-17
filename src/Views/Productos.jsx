import {Grid} from "@mui/material";
import InsertProducto from "../Components/Productos/InsertProducto";
export default function Productos() {
    return (
        <>
            <Grid container flex justifyContent='center' padding={1}>
                <InsertProducto/>
            </Grid>
        </>
    )
}