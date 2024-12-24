import Button from "../../utils/lib/Button";

export default function CreateTaskForm() {
    return (
        <form className="flex flex-col w-[40%] p-5 text-zinc-200">
            <label className="mb-1 font-bold">Task Title</label>
            <input
                type="text"
                placeholder="Make a UI design"
                className="mb-4 p-2 rounded border-[1px] border-zinc-900 bg-zinc-950 outline-none"
            />

            <label className="mb-1 font-bold">Task Description</label>
            <textarea
                rows={6}
                placeholder="Make a UI design for the website"
                className="mb-4 p-2 rounded border-[1px] border-zinc-900 bg-zinc-950 outline-none"
            />

            <label className="mb-1 font-bold">Task Deadline</label>
            <input
                type="date"
                className="mb-4 p-2 rounded border-[1px] border-zinc-900 bg-zinc-950 outline-none"
                id="picker"
            />

            <label className="mb-1 font-bold">Assign To</label>
            <input
                type="text"
                placeholder="Enter employee name"
                className="mb-4 p-2 rounded border-[1px] border-zinc-900 bg-zinc-950 outline-none"
            />

            <label className="mb-1 font-bold">Category</label>
            <input
                type="text"
                placeholder="design, dev, etc"
                className="mb-4 p-2 rounded border-[1px] border-zinc-900 bg-zinc-950 outline-none"
            />

            <Button buttonText={"Create Task"} />
        </form>
    );
}
