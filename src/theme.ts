import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { grey } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#333',
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
