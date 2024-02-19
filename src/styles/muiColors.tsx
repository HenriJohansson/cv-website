import { createTheme } from '@mui/material/styles';

const myDocument = getComputedStyle(document.documentElement);

const theme = createTheme({
  palette: {
    primary: {
      main: myDocument.getPropertyValue('--clr-primary'),
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: myDocument.getPropertyValue('--clr-primary-dark'),
      light: myDocument.getPropertyValue('--clr-primary-white'),
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#47008F',
    },
    text: {
      primary: myDocument.getPropertyValue('--clr-primary-text'),
    },
  },
});
export default theme;
