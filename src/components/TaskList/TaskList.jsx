import TaskListCard from "../Cards/TaskListCard";

export default function TaskList() {
    return (
        <div
            id="tasklist"
            className="h-full w-full flex items-center justify-start gap-5 overflow-x-auto"
        >
            <TaskListCard title={"Task Title"} desctiption={"This is a small description of the task."} priority={"High"}/>
            <TaskListCard title={"Task Title"} desctiption={"This is a small description of the task."} priority={"Medium"}/>
            <TaskListCard title={"Task Title"} desctiption={"This is a small description of the task."} priority={"Low"}/>
        </div>
    );
}
