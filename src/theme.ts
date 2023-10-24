import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { grey } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },

  palette: {
    primary: {
      main: '#861f41',
    },
    secondary: {
      main: '#d35401',
    },
    error: {
      main: red.A400,
    },

    background: {
      default: grey[100]
    }
  },
});

export default theme;
