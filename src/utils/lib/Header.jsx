/* eslint-disable react/prop-types */
import Button from "./Button";

export default function Header({ adminOrEmployee, data, setUser }) {
    const handleLogout = () => {
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            localStorage.removeItem("loggedInUser");
            setUser(null);
            // window.location.reload();
        }
    };
    console.log(data);
    return (
        <div className="flex items-center justify-between w-full">
            {adminOrEmployee === "Admin" ? (
                <>
                    <h1 className="flex flex-col font-semibold">
                        Hello, <br />{" "}
                        <span className="text-2xl"> {data?.name} 😉</span>
                    </h1>
                    <h1 className="text-xl font-semibold text-zinc-200">
                        Admin Dashboard
                    </h1>

                    <Button onClick={handleLogout} buttonText={"Log Out"} />
                </>
            ) : (
                <>
                    <h1 className="flex flex-col font-semibold text-zinc-200">
                        Hello, <br />{" "}
                        <span className="text-2xl"> {data?.name} 😉</span>
                    </h1>

                    <Button onClick={handleLogout} buttonText={"Log Out"} />
                </>
            )}
        </div>
    );
}
