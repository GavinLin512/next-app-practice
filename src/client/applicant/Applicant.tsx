import { Card, CardContent, CardHeader } from "@mui/material";
import {useAuthenticated} from "react-admin";
import { Title } from 'react-admin';

export const Applicant = () => {
    useAuthenticated();
    return (
        <>
            <Title title="發起人預覽" />
            <Card>
                <CardHeader title="Welcome to the administration" />
                <CardContent>Lorem ipsum sic dolor amet...</CardContent>
            </Card>
        </>

        )
};

// export default Applicant;