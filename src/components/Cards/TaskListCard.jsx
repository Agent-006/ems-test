// eslint-disable-next-line react/prop-types
export default function TaskListCard({ title, desctiption, date, category }) {
    return (
        <div className="flex-shrink-0 border-[1px] border-zinc-900 rounded-xl h-full w-80 bg-zinc-950 flex items-center justify-center p-4">
            <div className="relative w-full h-full p-4">
                {/* TODO: change the color of the category tag according to the task status */}
                <div
                    className={`absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded`}
                >
                    Category: {category}
                </div>
                <div className="absolute top-2 right-2 bg-gray-700 text-white text-xs font-bold px-2 py-1 rounded">
                    {date}
                </div>
                <div className="mt-8">
                    <h2 className="text-xl font-bold text-white">{title}</h2>
                    <p className="text-sm text-gray-400 mt-2">{desctiption}</p>
                </div>
                {/* TODO: make these buttons conditional, according to the task status */}
                <div className="absolute bottom-2 right-4 flex space-x-6">
                    <button className="bg-red-500 text-white text-xs font-bold px-3 py-2 rounded hover:bg-red-600">
                        Mark as Failed
                    </button>
                    <button className="bg-green-500 text-white text-xs font-bold px-3 py-2 rounded hover:bg-green-600">
                        Mark as Complete
                    </button>
                </div>
            </div>
        </div>
    );
}
