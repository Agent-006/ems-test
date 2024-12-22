export default function Header() {
    return (
        <div className="flex items-center justify-between w-full">
            <h1 className="flex flex-col font-semibold">
                Hello, <br /> <span className="text-2xl"> Sagar 😉</span>
            </h1>
            <button className="border-[1px] border-zinc-700 px-3 py-2 rounded-lg text-sm font-medium          bg-zinc-900 hover:bg-zinc-800 transition duration-2000">
                Log Out
            </button>
        </div>
    );
}
