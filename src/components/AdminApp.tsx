// in src/components/AdminApp.jsx
"use client"; // only needed if you choose App Router
import { Admin, Resource, ListGuesser, EditGuesser, useAuthenticated, CustomRoutes } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import {MyLayout} from "@/components/MyLayout";
import MyLoginPage from "@/components/MyLoginPage";
import authProvider from "@/auth/authProvider";
import {MyTheme} from "@/components/MyTheme";
import { Route } from 'react-router-dom';
import Applicant from "../client/applicant/Applicant";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const AdminApp = () => (
    <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
        layout={MyLayout}
        loginPage={MyLoginPage}
        theme={MyTheme}
        applicant={Applicant}
        dashboard={Applicant}
    >
        {/*<Resource*/}
        {/*    name="users"*/}
        {/*    list={ListGuesser}*/}
        {/*    edit={EditGuesser}*/}
        {/*    recordRepresentation="name"*/}
        {/*/>*/}
        {/*<Resource*/}
        {/*    name="posts"*/}
        {/*    list={ListGuesser}*/}
        {/*    edit={EditGuesser}*/}
        {/*    recordRepresentation="title"*/}
        {/*/>*/}
        <CustomRoutes>
            <Route path="/client/applicant" element={<Applicant />} />
        </CustomRoutes>
        {/*<Resource name="comments" list={ListGuesser} edit={EditGuesser} />*/}
    </Admin>
);

export default AdminApp;