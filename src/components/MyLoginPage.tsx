"use client"
import * as React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from "../components/Logo";
import {
    Card,
    CardContent,
    CardHeader,
    FormControl, IconButton, InputAdornment,
    InputLabel,
    MenuItem,
    Select
} from "@mui/material";
import {SelectChangeEvent} from "@mui/material/Select";
import {CustomTheme} from "@/components/MyTheme";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// function Copyright(props: any) {
//     return (
//         <Typography variant="body2" color="text.secondary" align="center" {...props}>
//             {'Copyright © '}
//             <Link color="inherit" href="https://mui.com/">
//                 和德昌供應商盡職調查平台
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

const customTheme = createTheme({
    palette: {
        MCDYellow: '#FFCB00',
        TextBlack: '#000000'
    },
});

const MyLoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();
    const [department, setDepartment] = useState('');
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleChange = (event: SelectChangeEvent) => {
        setDepartment(event.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        // will call authProvider.login({ email, password })
        login({ email, password }).catch(() =>
            notify('Invalid email or password')
        );
    };

    return (
        <ThemeProvider theme={customTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid item xs={12} sm={5} md={4} component={Paper} elevation={6} square sx={{
                    backgroundColor: CustomTheme.Login.BackgroundLeft.backgroundColor
                }}>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {/*<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>*/}
                        {/*    */}
                        {/*</Avatar>*/}
                        <Logo width={80} />
                        <Typography component="h1" variant="h5">
                            Welcome
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                variant="filled"
                                required
                                fullWidth
                                id="email"
                                label="帳號"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={e => setEmail(e.target.value)}
                            />

                            <TextField
                                margin="normal"
                                variant="filled"
                                required
                                fullWidth
                                name="password"
                                label="密碼"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                autoComplete="current-password"
                                onChange={e => setPassword(e.target.value)}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>,
                                }}
                            />
                            <FormControl sx={{ mt: 2, minWidth: 120 }} size="small">
                                <InputLabel id="department">部門</InputLabel>
                                <Select
                                    labelId="department"
                                    id="department-select"
                                    value={department}
                                    label="部門"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="MCDYellow"
                                sx={{ mt: 3, mb: 2, bgcolor: 'MCDYellow'}}
                            >
                                登入
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2" color="TextBlack">
                                        忘記密碼?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2" color="TextBlack">
                                        {"申請發起人帳號"}
                                    </Link>
                                </Grid>
                            </Grid>
                            {/*<Copyright sx={{ mt: 5 }} />*/}
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={7}
                    md={8}
                    sx={{
                        // backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        // backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        // backgroundSize: 'cover',
                        // backgroundPosition: 'center',
                    }}
                >
                    <Box>
                        <Card>
                            <CardHeader title="和德昌供應商盡職調查平台" />
                            <CardContent>
                                Prospect Hospitality Due Diligence Portal
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default MyLoginPage;