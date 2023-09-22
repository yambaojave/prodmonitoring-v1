import React from "react";
import { BASE_API_URL } from "../data/constants";
import Cookies from 'universal-cookie';
import { setSessionData } from "../utils/validationUtils";


export const useAuth = () => {
    const [user, setUser] = React.useState(null);
    const [authenticated, setAuthenticated] = React.useState(false);

    React.useEffect(() => {
        const authenticatedUser = sessionStorage.getItem('TOKEN');
        if(authenticatedUser){
            setUser(authenticatedUser);
            setAuthenticated(true);
        }
    }, [])

    const login = async (userData) => {
        try{
            const response = await fetch(`${BASE_API_URL}/Auth/login`, {
                method: 'POST',
                headers: { 
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });
            const result = await response.json();
    
            if(response.status === 400){
                return result
            }

            if(response.status === 200){
                const cookies = new Cookies();
                cookies.set('TOKEN', `Bearer ${result.token}`, {path: "/"});

                sessionStorage.setItem('TOKEN', `Bearer ${result.token}`);

                return result
            }
    
            
        }
        catch(err){
            console.log(err);
            throw err;
        }
        
    }

    const logout = () => {
        sessionStorage.removeItem('TOKEN');
        setUser(null);
    }

    return {
        user,
        authenticated,
        login,
        logout
    };
};