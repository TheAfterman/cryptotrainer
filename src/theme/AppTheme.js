import { createMuiTheme } from '@material-ui/core/styles';

export const AppTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#593E56',
            light: '#AD9B9A',
            dark: '#593E56',
            contrastText: '#EAF2EF'
        },
        secondary: {
            light: '#0066ff',
            main: '#AD9B9A',
            dark: '#AD9B9A',
            contrastText: '#EAF2EF'
        },
        background: {
            default: '#8D918B',
            paper: '#AD9B9A'
        },
        text: {
            primary: '#EAF2EF',
            secondary: '#EAF2EF'
        }
        // error: will use the default color
    },
    
    typography: {
        fontFamily: '"Montserrat", sans serif',
        fontStyle: 'normal',
        contrastText: '#AD9B9A',
        color: '#AD9B9A'
    },
    overrides: {
        MuiCssBaseline: {
          '@global': {
            '@fontFamily': '"Montserrat", sans serif',
          }
        },
      }
});