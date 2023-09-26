// in src/components/AdminApp.jsx
"use client"; // only needed if you choose App Router
import { Admin, Resource, ListGuesser, EditGuesser, useAuthenticated, CustomRoutes } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import {MyLayout} from "@/components/MyLayout";
import MyLoginPage from "@/components/MyLoginPage";
import authProvider from "@/auth/authProvider";
import {MyTheme} from "@/components/MyTheme";
import {BrowserRouter, Route} from 'react-router-dom';
import {Applicant} from "@/client/applicant/Applicant";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const AdminApp = () => (
        <Admin
            basename='/client'
            authProvider={authProvider}
            dataProvider={dataProvider}
            layout={MyLayout}
            loginPage={MyLoginPage}
            theme={MyTheme}
            applicant={Applicant}
            // dashboard={Applicant}
        >
            <CustomRoutes>
                <Route path="/applicant" element={<Applicant />} />
            </CustomRoutes>
        </Admin>
);

export default AdminApp;