/* eslint-disable react/prop-types */
import { useContext } from "react";
import Header from "../../utils/lib/Header";
import AllTaskTileCard from "../Cards/AllTaskTileCard";
import CreateTaskForm from "../Forms/CreateTaskForm";
import { AuthContext } from "../../context/AuthProvider";

export default function AdminDashboard({ data, setUser }) {
    console.log(data);

    const authData = useContext(AuthContext);
    console.log(authData.employees);

    return (
        <div className="h-[90%] w-full flex flex-col items-center justify-center p-4 gap-3">
            <div className="h-20 w-full flex flex-col items-center justify-center bg-zinc-950 border-[.5px] border-zinc-900 p-4 gap-3 rounded-lg">
                <Header setUser={setUser} data={data} adminOrEmployee={"Admin"} />
            </div>
            <div className="h-full w-full flex items-start justify-center">
                <div className="flex flex-wrap h-full w-1/2 items-start justify-start gap-5 py-4">
                    <CreateTaskForm />
                </div>
                <div
                    id="tasklist"
                    className="flex flex-wrap h-full w-1/2 items-start justify-center gap-5 py-4 px-5 overflow-y-scroll"
                >
                    {authData.employees.map((employee) =>
                        (employee.tasks.map((task, index) => (
                            <AllTaskTileCard
                            key={index}
                            title={task.title}
                            desctiption={task.description}
                            date={task.date}
                            category={task.category}
                            assignedTo={employee.name}
                            status={task.status}
                            taskCount={employee.taskCount}
                            />
                        )))
                    )}
                </div>
            </div>
        </div>
    );
}
