// in src/components/AdminApp.jsx
"use client"; // only needed if you choose App Router
import { Admin, Resource, ListGuesser, EditGuesser, useAuthenticated } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import {MyLayout} from "@/components/MyLayout";
import MyLoginPage from "@/components/MyLoginPage";
import authProvider from "@/auth/authProvider";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const AdminApp = () => (
    <Admin authProvider={authProvider} dataProvider={dataProvider} layout={MyLayout} loginPage={MyLoginPage}>
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
        <Resource name="comments" list={ListGuesser} edit={EditGuesser} />
    </Admin>
);

export default AdminApp;