/* eslint-disable react/prop-types */
export default function DashboardTileCard({
    number,
    title,
    className,
}) {
    const titleColors = {
        "New Task": "text-zinc-300",
        Completed: "text-green-500",
        Accepted: "text-blue-500",
        Failed: "text-red-500",
    };

    const getColor = (title) => titleColors[title] || "text-xl font-medium";

    return (
        <div
            className={`h-32 flex justify-between items-start border-[1px] border-zinc-900 rounded-xl bg-zinc-950 ${className}`}
        >
            <div className="h-full w-full rounded-xl py-6 px-9">
                <h2 className={`text-3xl font-semibold`}>{number}</h2>
                <h3 className={`text-xl font-medium ${getColor(title)}`}>
                    {title}
                </h3>
            </div>
        </div>
    );
}
