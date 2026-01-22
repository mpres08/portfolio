import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#E9633E"
        },
        secondary: {
            main: "#537987"
        },
        background: {
            default: "#E3A58A"
        }
    },
    typography: {
        fontFamily: "'Galyon', sans-serif"
    },
});

export default theme;