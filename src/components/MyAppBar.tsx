// in src/MyAppBar.js
import * as React from 'react';
import { AppBar, TitlePortal } from 'react-admin';
import Box from '@mui/material/Box';
import Logo from "@/components/Logo";



export const MyAppBar = () => (
    <AppBar>
        <TitlePortal />
        <Box flex="1" />
        <Logo />
        <Box flex="2" />
    </AppBar>
);