// @ts-nocheck

// MUI Button import
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const btnTheme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#146EBE",
      },
      
    },
    typography: {
        fontFamily: 'Montserrat',
    },
});

export default function CustomButton({action, children, icon}){
    return (
        <ThemeProvider theme={btnTheme}>
            <Button variant="contained" onClick={action} startIcon={icon}>
                {children}
            </Button>
        </ThemeProvider>
    );
};