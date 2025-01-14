/* eslint-disable react/prop-types */
export default function TaskListCard({
    title,
    desctiption,
    date,
    category,
    status,
}) {

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
        <div className="flex-shrink-0 border-[1px] border-zinc-900 rounded-xl h-full w-80 bg-zinc-950 flex items-center justify-center p-4">
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
                    <p className="text-sm text-gray-400 mt-2">{desctiption}</p>
                </div>
                
                <div className="absolute bottom-2 right-4 flex space-x-6">
                    {statusKey === "newTask" && (
                        <>
                            <button className="bg-red-500/5 border-[1px] border-zinc-900 text-blue-500 text-xs font-bold px-3 py-2 rounded hover:bg-blue-500 hover:text-zinc-100 duration-500">
                                Accept Task
                            </button>
                        </>
                    )}

                    {statusKey === "active" && (
                        <>
                            <button className="bg-red-500/5 border-[1px] border-zinc-900 text-red-500 text-xs font-bold px-3 py-2 rounded hover:bg-red-500 hover:text-zinc-100 duration-500">
                                Mark as Failed
                            </button>
                            <button className="bg-green-500/5 border-[1px] border-zinc-900 text-green-500 text-xs font-bold px-3 py-2 rounded hover:bg-green-500 hover:text-zinc-100 duration-500">
                                Mark as Complete
                            </button>
                        </>
                    )}

                    {statusKey === "completed" && (
                        <>
                            <div className="w-64 flex items-center justify-center bg-green-500/5 border-[1px] border-zinc-900 text-green-500 text-xs font-bold px-3 py-2 rounded hover:text-zinc-100 hover:border-green-500 duration-500">
                                Completed !
                            </div>
                        </>
                    )}

                    {statusKey === "failed" && (
                        <>
                            <div className="w-64 flex items-center justify-center bg-green-500/5 border-[1px] border-zinc-900 text-red-500 text-xs font-bold px-3 py-2 rounded  hover:text-zinc-100 hover:border-red-500 duration-500">
                                Failed !
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
