import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";

import AdminDashboard from "./components/DashBoard/AdminDashboard";
import { useState } from "react";

function App() {
    const [user, setUser] = useState(null);

    const handleLogin = (email, password) => {
        if (email === "admin@me.com" && password === "123") {
            setUser("admin");
        } else if (email === "user@me.com" && password === "123") {
            setUser("user");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <>
            {user === null && <Login handleLogin={handleLogin} />}
            <div className="bg-zinc-950 h-screen w-full flex justify-center items-center text-white overflow-hidden">
                {user === "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
            </div>
        </>
    );
}
export default App;
