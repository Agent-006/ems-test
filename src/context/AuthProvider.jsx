/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const { employees, admin } = getLocalStorage();
        setUserData({ employees, admin });
    }, [setUserData]);

    console.log(userData);

    return (
        <div>
            <AuthContext.Provider value={[userData, setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    );
}
