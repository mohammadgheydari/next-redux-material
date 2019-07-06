import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/deepPurple'
export default createMuiTheme({
  direction: "rtl",
  overrides: {
    MuiButton: { // Name of the component ⚛️ / style sheet
      text: { // Name of the rule
        color: 'white', // Some CSS
      },
    },
  },
  palette: {
    type: 'light',
    primary: { 
      light: purple[500],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: '#EF4044',
      main: '#EF4044',
      dark: '#EF4044',
    },
    divider: '#D7D6D5',
    background: {
      paper: '#fff',
      default: "#fff"
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'iransans',
    htmlFontSize: 16,
  },
});


