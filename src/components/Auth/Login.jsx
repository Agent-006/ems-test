/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../../utils/lib/Button";

export default function Login({onLogin}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Two way binding
    // Form submission handling
    const handleSubmit = (e) => {
        e.preventDefault();
        //TODO: remove console.log
        console.log("Email: ", email, "\n", "Password: ", password);
        onLogin(email, password);
        
        setEmail("");
        setPassword("");
    };

    return (
        <div className="flex h-screen w-full items-center justify-center">
            <div className="flex flex-col items-center justify-evenly h-96 w-72 border-[.5px] border-zinc-900 rounded-lg">
                <span className="text-3xl font-semibold text-zinc-100">Login</span>
                <form
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }} // Form submission handling
                    className="flex flex-col items-center justify-center p-4 gap-3"
                >
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="rounded-full py-2 px-5 outline-none placeholder:text-zinc-500 bg-zinc-900 text-zinc-100"
                        type="email"
                        placeholder="Enter your email"
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="rounded-full py-2 px-5 outline-none placeholder:text-zinc-500 bg-zinc-900 text-zinc-100"
                        type="password"
                        placeholder="Enter your password"
                    />
                    <Button type={"submit"} className={"mt-5"} buttonText={"Login"} />
                </form>
            </div>
        </div>
    );
}