import Header from "../../utils/lib/Header";
import DashboardTileCard from "../Cards/DashboardTileCard";
import TaskList from "../TaskList/TaskList";

export default function EmployeeDashboard() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center p-4 gap-3">
            <div className="h-20 w-full flex flex-col items-center justify-center bg-zinc-950 border-[.5px] border-zinc-900 p-4 gap-3 rounded-lg">
                <Header adminOrEmployee={""}/>
            </div>
            <div className="flex flex-wrap h-[40%] w-full items-start justify-center gap-5 py-4">
                <DashboardTileCard className={"w-[48%]"} number={0} title={"New Task"}/>
                <DashboardTileCard className={"w-[48%]"} number={3} title={"Completed"}/>
                <DashboardTileCard className={"w-[48%]"} number={0} title={"Accepted"}/>
                <DashboardTileCard className={"w-[48%]"} number={1} title={"Failed"}/>
            </div>
            <div className="flex flex-wrap h-[60%] w-full items-start justify-center gap-5 py-4 px-5">
               <TaskList />
            </div>
        </div>
    );
}
