// import Login from "./components/Auth/Login";
// import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";

import AdminDashboard from "./components/DashBoard/AdminDashboard";

function App() {
    return (
        <div className="bg-zinc-950 h-full w-full flex justify-center items-center text-white">
            {/* <Login /> */}
            {/* <EmployeeDashboard /> */}
            <AdminDashboard />
        </div>
    );
}

export default App;