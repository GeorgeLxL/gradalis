/**
 * App Primary Theme
 */
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
   palette: {
      primary: {
         main: '#DAC720',
      },
      secondary: {
         main: '#845F28',
      },
      background: {
         default: 'rgba(0, 0, 0, 0.8)',
         paper: '#000',
      },
      text: {
         primary: '#fff',
         secondary: 'rgba(0, 0, 0, 0.54)',
         disabled: 'rgba(0, 0, 0, 0.38)',
         hint: 'rgba(0, 0, 0, 0.38)',
      },
      divider: '#fff',
   },
   status: {
      danger: 'orange',
   },
   typography: {
      fontFamily: [
         '-apple-system',
         'BlinkMacSystemFont',
         '"Segoe UI"',
         'Roboto',
         '"Helvetica Neue"',
         'Arial',
         'sans-serif',
         '"Apple Color Emoji"',
         '"Segoe UI Emoji"',
         '"Segoe UI Symbol"',
      ].join(','),
      subtitle1: {
         fontSize: 36,
      },
      subtitle2: {
         fontSize: 24,
      },
      body1: {
         fontWeight: 700,
         fontSize: 18,
      },
      body2: {
         fontWeight: 700,
         fontSize: 14,
      },
      button: {
         fontWeight: 700,
         fontSize: 14,
      },
      caption: {
         fontSize: 12,
      },
      useNextVariants: true,
   },
});

export default theme;
