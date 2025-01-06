import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import AdminDashboard from "./components/DashBoard/AdminDashboard";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProvider";

function App() {
    const [user, setUser] = useState(null);
    const [loggedInUserData, setLoggedInUserData] = useState(null);

    const authData = useContext(AuthContext);
    // console.log(authData.employees, authData.admin);

    useEffect(() => {
        if (authData) {
            const loggedInUser = localStorage.getItem("loggedInUser");
            if (loggedInUser) {
                //FIXME: CHANGE IF DON'T WORKS
                setUser(JSON.parse(loggedInUser).role);
            }
        }
    }, [authData]);

    const handleLogin = (email, password) => {
        if (
            authData &&
            authData.admin.find(
                (adminData) =>
                    adminData.email === email && adminData.password === password
            )
        ) {
            setUser("admin");
            localStorage.setItem(
                "loggedInUser",
                JSON.stringify({ role: "admin" })
            );
        } else if (authData) {
            const employee = authData.employees.find(
                (employee) =>
                    employee.email === email && employee.password === password
            );

            if (employee) {
                setUser("employee");
                setLoggedInUserData(employee);
                localStorage.setItem(
                    "loggedInUser",
                    JSON.stringify({ role: "employee" })
                );
            }
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <>
            {user === null && <Login handleLogin={handleLogin} />}
            <div className="bg-zinc-950 h-screen w-full flex justify-center items-center text-white overflow-hidden">
                {user === "admin" ? (
                    <AdminDashboard />
                ) : (
                    <EmployeeDashboard data={loggedInUserData} />
                )}
            </div>
        </>
    );
}
export default App;
