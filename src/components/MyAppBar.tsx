// in src/MyAppBar.js
import * as React from 'react';
import { AppBar, TitlePortal } from 'react-admin';
import Box from '@mui/material/Box';
import {Theme} from "@/components/Theme";
import Logo from "@/components/Logo";



export const MyAppBar = () => (
    <AppBar
        sx={{
            color: 'black',
            background: `${Theme.AppBarTheme.background}`,
            '& .RaAppBar-toolbar': {
                paddingBottom: 2,
                paddingTop:1
            },
        }}
    >
        <TitlePortal />
        <Box flex="1" />
        <Logo />
        <Box flex="2" />
    </AppBar>
);