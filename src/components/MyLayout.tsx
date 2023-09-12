import { Layout } from 'react-admin';

import { MyAppBar } from './MyAppBar';
import MyMenu from './menu/MyMenu'
import {ReactQueryDevtools} from "react-query/devtools";
export const MyLayout = props => (
    <>
        <Layout {...props} appBar={MyAppBar} menu={MyMenu} />
        <ReactQueryDevtools />
    </>
);