export default function TaskListCard() {
    return (
        <div className="h-32 w-[48%] flex justify-between items-start border-[1px] border-zinc-900 rounded-xl bg-zinc-950">
            <div className="h-full w-full rounded-xl py-6 px-9">
                <h2 className="text-3xl font-semibold">0</h2>
                <h3 className="text-xl font-medium">New Task</h3>
            </div>
        </div>
    );
}
