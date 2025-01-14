import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import AdminDashboard from "./components/DashBoard/AdminDashboard";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProvider";

function App() {
    const [userData] = useContext(AuthContext);
    
    const [user, setUser] = useState(null);
    const [loggedInUserData, setLoggedInUserData] = useState(null);

    //TODO: remove these console.log statements
    // console.log(userData);
    // console.log(authData.employees, authData.admin);
    // setLocalStorage();

    useEffect(() => {
        if (userData) {
            const loggedInUser = localStorage.getItem("loggedInUser");

            if (loggedInUser) {
                const loggedInUserData = JSON.parse(loggedInUser);
                setUser(loggedInUserData.role);
                setLoggedInUserData(loggedInUserData.data);
            }
        }
    }, [userData]);

    const handleLogin = (email, password) => {
        if (userData) {
            const admin = userData.admin.find(
                (adminData) =>
                    adminData.email === email && adminData.password === password
            );

            if (admin) {
                setUser("admin");
                setLoggedInUserData(admin);
                localStorage.setItem(
                    "loggedInUser",
                    JSON.stringify({ role: "admin", data: admin })
                );
            }
        } else {
            alert("Invalid credentials");
        }

        if (userData) {
            const employee = userData.employees.find(
                (employee) =>
                    employee.email === email && employee.password === password
            );

            if (employee) {
                setUser("employee");
                setLoggedInUserData(employee);
                localStorage.setItem(
                    "loggedInUser",
                    JSON.stringify({ role: "employee", data: employee })
                );
            }
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <>
            <div className="bg-zinc-950 h-screen w-full flex justify-center items-center text-white overflow-hidden">
                {user === "admin" && <AdminDashboard setUser={setUser} data={loggedInUserData} />}
                {user === "employee" && (
                    <EmployeeDashboard setUser={setUser} data={loggedInUserData} />
                )}
                {user === null && <Login onLogin={handleLogin} />}
            </div>
        </>
    );
}
export default App;
