import React from 'react';
import { AppBar, Toolbar, Typography} from "@mui/material";
function Navbar() {
    return (
        <>
            <AppBar position="sticky" sx={{bgcolor: "primary.main"}}>
                <Toolbar variant='dense'>
                    <Typography variant='h6'>
                        Store!
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default Navbar;