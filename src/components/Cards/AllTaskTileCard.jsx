/* eslint-disable react/prop-types */
export default function AllTaskTileCard({
    category,
    title,
    desctiption,
    date,
    assignedTo,
    status,
    taskCount,
}) {
    console.log(taskCount);
    const statusColor = {
        active: "bg-blue-500",
        newTask: "bg-gray-500",
        completed: "bg-green-500",
        failed: "bg-red-500",
    };

    const getStatus = () => {
        for (let key in status) {
            if (status[key]) {
                return key;
            }
        }
    };

    const statusKey = getStatus();

    return (
        <div className="flex-shrink-0 border-[1px] border-zinc-900 rounded-xl h-96 w-80 bg-zinc-950 flex items-center justify-center p-4">
            <div className="relative w-full h-full p-4">
                <div
                    className={`absolute top-2 left-2 ${statusColor[statusKey]} text-white text-xs font-bold px-2 py-1 rounded`}
                >
                    {category}
                </div>
                <div className="absolute top-2 right-2 bg-gray-700 text-white text-xs font-bold px-2 py-1 rounded">
                    {date}
                </div>
                <div className="mt-8">
                    <h2 className="text-xl font-bold text-white">{title}</h2>
                    <h4 className="text-sm font-semibold text-zinc-300 mt-1">
                        {assignedTo}
                    </h4>
                    <p className="text-sm text-gray-400 mt-2">{desctiption}</p>
                </div>

                <div className="absolute bottom-2 flex flex-col justify-center items-start gap-2">
                    <h1 className="text-white font-semibold">Task Counts</h1>
                    <div className="flex items-start justify-start gap-2">
                        <div className="w-14 flex items-center justify-center bg-zinc-500/5 border-[1px] border-zinc-900 text-zinc-500 text-xs font-bold px-3 py-2 rounded hover:text-zinc-100 hover:border-zinc-500 duration-500">
                            {taskCount?.newTask}
                        </div>
                        <div className="w-14 flex items-center justify-center bg-blue-500/5 border-[1px] border-zinc-900 text-blue-500 text-xs font-bold px-3 py-2 rounded hover:text-zinc-100 hover:border-blue-500 duration-500">
                            {taskCount?.active}
                        </div>
                        <div className="w-14 flex items-center justify-center bg-green-500/5 border-[1px] border-zinc-900 text-green-500 text-xs font-bold px-3 py-2 rounded hover:text-zinc-100 hover:border-green-500 duration-500">
                            {taskCount?.completed}
                        </div>
                        <div className="w-14 flex items-center justify-center bg-red-500/5 border-[1px] border-zinc-900 text-red-500 text-xs font-bold px-3 py-2 rounded hover:text-zinc-100 hover:border-red-500 duration-500">
                            {taskCount?.failed}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
