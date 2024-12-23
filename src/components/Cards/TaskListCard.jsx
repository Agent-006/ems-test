// eslint-disable-next-line react/prop-types
export default function TaskListCard({ priority, title, desctiption }) {
    const PriorityTagColor = {
        High: "bg-red-500",
        Medium: "bg-yellow-500",
        Low: "bg-green-500",
    };

    return (
        <div className="flex-shrink-0 border-[1px] border-zinc-900 rounded-xl h-full w-80 bg-zinc-950 flex items-center justify-center p-4">
            <div className="relative w-full h-full p-4">
                <div
                    className={`absolute top-2 left-2 ${PriorityTagColor[priority]} text-white text-xs font-bold px-2 py-1 rounded`}
                >
                    {priority}
                </div>
                <div className="absolute top-2 right-2 bg-gray-700 text-white text-xs font-bold px-2 py-1 rounded">
                    {/* TODO: set the date from the DB | Date of creation*/}
                    {new Date().toLocaleDateString("en-In", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                    })}
                </div>
                <div className="mt-8">
                    <h2 className="text-xl font-bold text-white">{title}</h2>
                    <p className="text-sm text-gray-400 mt-2">{desctiption}</p>
                </div>
            </div>
        </div>
    );
}
