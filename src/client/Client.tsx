import Applicant from "@/client/applicant/Applicant";
import {CustomRoutes} from "react-admin";
import {Route} from "react-router";
import {MyLayout} from "@/components/MyLayout";
import {MyTheme} from "@/components/MyTheme";
import authProvider from "@/auth/authProvider";
import MyLoginPage from "@/components/MyLoginPage";
import {Admin} from "react-admin";

export const Client = () => (
    <Admin
        basename='/client'
        layout={MyLayout}
        theme={MyTheme}
        authProvider={authProvider}
        // dataProvider={dataProvider}
        loginPage={MyLoginPage}
        applicant={Applicant}
    >
        <CustomRoutes>
            <Route path="/applicant" element={<Applicant />} />
        </CustomRoutes>
    </Admin>

);