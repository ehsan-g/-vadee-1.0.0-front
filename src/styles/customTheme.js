import { createTheme } from '@material-ui/core/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#A2A28F',
    },
    secondary: {
      main: '#99CCCC',
    },
    background: {
      default: '#ffffff',
    },
  },

  typography: {
    fontFamily: 'Farhang',
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: 'white',
          color: 'black',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: 'white',
          color: 'black',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          alignContent: 'center',
          padding: '2px',
        },
        underlineNone: {
          // Some CSS
          color: 'black',
          '&:hover': {
            color: 'black',
            textDecoration: 'none',
          },
        },
        subtitle1: {
          fontSize: '12px',
          margin: '2px',
        },
        subtitle2: {
          margin: '0px',
          fontSize: '13px',
        },
        h6: {
          padding: 0,
          lineHeight: 1,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          textTransform: 'none',
          minWidth: '80px',
          color: 'white',
          borderRadius: 0,
          maxHeight: 32,
          '&:hover': {
            color: 'white',
            backgroundColor: '#secondary',
            textDecoration: 'none',
          },
        },
        outlined: {
          borderRadius: 0,
          '&:hover': {
            borderColor: 'black',
            textDecoration: 'none',
          },
        },
      },
    },
    MuiImageList: {
      styleOverrides: {
        root: {
          overflowY: '-moz-hidden-unscrollable',
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: 'black',
            textDecoration: 'none',
          },
          // right: 30,
          // transformOrigin: 'top right',
          // transition: 'transform 0.6s cubic-bezier(0.61, 1, 0.88, 1)',
          // transform: 'translate(1px, 9px) scale(0.75)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
        },
      },
    },
  },
});

export default customTheme;
