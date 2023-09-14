import {createTheme} from "@mui/system";
import {red, yellow, gray} from "@mui/material/colors";

import { defaultTheme } from 'react-admin';

export const CustomTheme = createTheme({
    palette: {
        MCDYellow: yellow[500],
    },
    Login: {
        BackgroundLeft: {
            backgroundColor: red[200]
        },

    }
})

export const MyTheme = {
    ...defaultTheme,
    components: {
        ...defaultTheme.components,
        RaAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "Lavender",
                    "& .RaAppBar-toolbar": {
                        background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(230,231,218,1) 87%, rgba(186,0,5,1) 87%, rgba(252,189,13,1) 97%);',
                        color: 'black',
                    },
                }
            }
        },
        RaMenuItemLink: {
            styleOverrides: {
                root: {
                    // invisible border when not active, to avoid position flashs
                    borderLeft: '3px solid transparent',
                    '&.RaMenuItemLink-active': {
                        borderLeft: '10px solid #4f3cc9',
                    },
                    '& .RaMenuItemLink-icon': {
                        color: '#EFC44F',
                    },
                },
            },
        },
    }
};