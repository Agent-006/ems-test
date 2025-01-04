/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const { employees, admin } = getLocalStorage();
        setUserData({ employees, admin });
    }, []);

    console.log(userData);

    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    );
}
