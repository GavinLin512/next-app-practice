import { AuthProvider } from 'react-admin';
import axios from "@/lib/axios";

const CsrfToken = () => axios.get('/sanctum/csrf-cookie');

const authProvider: AuthProvider = {
    login: async ({ email, password }) => {
        await CsrfToken();
        await axios.post('/login', {email, password})
            .then( response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.statusText;
            })
            .then(auth => {
                localStorage.setItem('auth', auth);
            })
            .catch(() => {
                throw new Error('Network error')
            });
        // const request = new Request(process.env.NEXT_PUBLIC_BACKEND_URL+'/login', {
        //     method: 'POST',
        //     body: JSON.stringify({ email, password }),
        //     headers: new Headers({ 'Content-Type': 'application/json' }),
        // });
        // return fetch (request)
        //     .then( response => {
        //         if (response.status < 200 || response.status >= 300) {
        //             throw new Error(response.statusText);
        //         }
        //         return response.json();
        //     })
        //     .then(auth => {
        //         localStorage.setItem('auth', JSON.stringify(auth));
        //     })
        //     .catch(() => {
        //         throw new Error('Network error')
        //     });
    },
    // called when the user attempts to log in
    // login: ({ email }) => {
    //     localStorage.setItem("username", email);
    //     // accept all username/password combinations
    //     return Promise.resolve();
    // },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem("auth");
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }: { status: number }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem("auth");
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem("auth")
            ? Promise.resolve()
            : Promise.reject();
    },
    getPermissions: () => {
        // Required for the authentication to work
        return Promise.resolve();
    },
    // ...
};

export default authProvider;