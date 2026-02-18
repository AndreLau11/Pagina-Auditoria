import { createTheme, alpha } from '@mui/material/styles';

// Colores oficiales SAT Guatemala
export const satColors = {
  primary: '#1a237e',    // Azul oscuro SAT
  secondary: '#d32f2f',  // Rojo para alertas
  success: '#2e7d32',    // Verde para éxitos
  warning: '#ed6c02',    // Naranja para advertencias
  info: '#0288d1',       // Azul información
  background: '#f5f5f5', // Fondo claro
  paper: '#ffffff',      // Fondo de tarjetas
  textPrimary: '#212121',
  textSecondary: '#757575',
};

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: satColors.primary,
      light: '#534bae',
      dark: '#000051',
      contrastText: '#ffffff',
    },
    secondary: {
      main: satColors.secondary,
      light: '#ff6659',
      dark: '#9a0007',
      contrastText: '#ffffff',
    },
    background: {
      default: satColors.background,
      paper: satColors.paper,
    },
    text: {
      primary: satColors.textPrimary,
      secondary: satColors.textSecondary,
    },
  },
  typography: {
    fontFamily: [
      '"Inter"',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          padding: '8px 24px',
        },
        containedPrimary: {
          boxShadow: '0 2px 4px rgba(26, 35, 126, 0.2)',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(26, 35, 126, 0.3)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          borderRadius: 12,
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
  },
});

export default theme;
