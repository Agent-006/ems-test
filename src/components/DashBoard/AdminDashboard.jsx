import DashboardTileCard from "../Cards/DashboardTileCard";
import Header from "../../utils/lib/Header";
import { useNavigate } from "react-router-dom";
import AllTaskTileCard from "../Cards/AllTaskTileCard";

export default function AdminDashboard() {
    const navigate = useNavigate();
    const handleClick = (toURL) => {
        console.log("clicked");
        navigate(`/${toURL}`);
    };

    return (
        <div className="h-full w-full flex flex-col items-center justify-center p-4 gap-3">
            <div className="h-20 w-full flex flex-col items-center justify-center bg-zinc-950 border-[.5px] border-zinc-900 p-4 gap-3 rounded-lg">
                <Header adminOrEmployee={"Admin"} />
            </div>
            <div className="flex flex-wrap h-40 w-full items-start justify-center gap-5 py-4">
                {/* FIXME: onClick funtion */}
                <DashboardTileCard
                    onClick={() => handleClick("create-task")}
                    className={"cursor-pointer"}
                    number={"+"}
                    title={"Create Task"}
                />
                <DashboardTileCard
                    onClick={() => handleClick("all-tasks")}
                    className={"cursor-pointer"}
                    number={"+"}
                    title={"All Task"}
                />
            </div>
            <div className="flex flex-wrap h-full w-full items-start justify-center gap-5 py-4 px-5">
                {/* <CreateTaskForm /> */}

                <AllTaskTileCard
                    priority="High"
                    title="Task"
                    assignedTo="Employee"
                    desctiption="abdfk"
                />
                <AllTaskTileCard
                    priority="High"
                    title="Task"
                    assignedTo="Employee"
                    desctiption="abdfk"
                />
                <AllTaskTileCard
                    priority="High"
                    title="Task"
                    assignedTo="Employee"
                    desctiption="abdfk"
                />
                <AllTaskTileCard
                    priority="High"
                    title="Task"
                    assignedTo="Employee"
                    desctiption="abdfk"
                />
            </div>
        </div>
    );
}
