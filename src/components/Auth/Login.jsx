export default function Login() {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <div className="flex flex-col items-center justify-evenly h-96 w-72 border-[.5px] border-zinc-900 rounded-lg">
                <span className="text-3xl font-semibold">Login</span>
                <form
                    action=""
                    className="flex flex-col items-center justify-center p-4 gap-3"
                >
                    <input
                        className="rounded-full py-2 px-5 outline-none placeholder:text-zinc-500 bg-zinc-900"
                        type="email"
                        placeholder="Enter your email"
                    />
                    <input
                        className="rounded-full py-2 px-5 outline-none placeholder:text-zinc-500 bg-zinc-900"
                        type="password"
                        placeholder="Enter your password"
                    />
                    <button className="bg-zinc-500 text-white font-semibold py-2 px-6 rounded-full mt-4 hover:bg-zinc-600 transition-colors duration-300">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
