import {createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#030f31',
        },
        background: {
            default: '#ebf0ff'
        },
        secondary: {
            main: '#D61C4E',

        }
    },
    typography: {
        fontFamily: 'QuickSans',
        button: {
            textTransform: 'uppercase',
        }
    },
    shape: {
        borderRadius: 12
    }, components:{
        MuiFilledInput:{
            styleOverrides: {
                root:{
                    borderRadius: "5px 5px 0px 0px",
                }
            }
        }
    }
})

export default theme;