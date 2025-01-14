/* eslint-disable react/prop-types */
import TaskListCard from "../Cards/TaskListCard";

export default function TaskList({ data }) {
    return (
        <div
            id="tasklist"
            className="h-full w-full flex items-center justify-start gap-5 overflow-x-auto"
        >
            {data?.tasks?.map((task, index) => (
                <TaskListCard
                    key={index}
                    title={task.title}
                    desctiption={task.description}
                    date={task.date}
                    category={task.category}
                    status={task.status}
                />
            ))}
        </div>
    );
}
