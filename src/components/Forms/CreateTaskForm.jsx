import { useContext, useState } from "react";
import Button from "../../utils/lib/Button";
import { AuthContext } from "../../context/AuthProvider";

export default function CreateTaskForm() {
    const [userData, setUserData] = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [assignedTo, setAssignedTo] = useState("");
    const [category, setCategory] = useState("");

    const [task, setTask] = useState({});

    console.log(userData);

    // submit the task
    const handleSubmit = (e) => {
        e.preventDefault();

        setTask({
            title: taskTitle,
            description: taskDescription,
            date: taskDate,
            assignedTo: assignedTo,
            category: category,
            status: {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
            },
        });

        const data = userData.employees;

        //FIXME: here is a bug, the task at first is not being added to the employee
        if (data !== null) {
            data.forEach((employee) => {
                if (employee.name === assignedTo) {
                    employee.tasks.push(task);
                    employee.taskCount.newTask += 1;
                    console.log(employee.tasks);
                }
            });
            setUserData({ employees: data, admin: userData.admin });
            localStorage.setItem("employees", JSON.stringify(data));
            console.log(data);
        }


        setTaskTitle("");
        setTaskDescription("");
        setTaskDate("");
        setAssignedTo("");
        setCategory("");
    };

    return (
        <form
            onSubmit={(e) => {
                handleSubmit(e);
            }}
            className="flex flex-col w-full p-5 text-zinc-200"
        >
            <label className="mb-1 font-bold">Task Title</label>
            <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                type="text"
                placeholder="Make a UI design"
                className="mb-4 p-2 rounded border-[1px] border-zinc-900 bg-zinc-950 outline-none"
            />

            <label className="mb-1 font-bold">Task Description</label>
            <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                rows={6}
                placeholder="Make a UI design for the website"
                className="mb-4 p-2 rounded border-[1px] border-zinc-900 bg-zinc-950 outline-none"
            />

            <label className="mb-1 font-bold">Task Deadline</label>
            <input
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                type="date"
                className="mb-4 p-2 rounded border-[1px] border-zinc-900 bg-zinc-950 outline-none"
                id="picker"
            />

            <label className="mb-1 font-bold">Assign To</label>
            <input
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
                type="text"
                placeholder="Enter employee name"
                className="mb-4 p-2 rounded border-[1px] border-zinc-900 bg-zinc-950 outline-none"
            />

            <label className="mb-1 font-bold">Category</label>
            <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="design, dev, etc"
                className="mb-4 p-2 rounded border-[1px] border-zinc-900 bg-zinc-950 outline-none"
            />

            <Button buttonText={"Create Task"} />
        </form>
    );
}
