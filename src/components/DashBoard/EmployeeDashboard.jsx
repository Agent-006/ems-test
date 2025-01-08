/* eslint-disable react/prop-types */
import Header from "../../utils/lib/Header";
import DashboardTileCard from "../Cards/DashboardTileCard";
import TaskList from "../TaskList/TaskList";

export default function EmployeeDashboard({ data }) {
    console.log(data);
    const tileCardName = [
        {
            title: "New Task",
            number: data?.taskCount?.newTask || 0,
        },
        {
            title: "Completed",
            number: data?.taskCount?.completed || 0,
        },
        {
            title: "Accepted",
            number: data?.taskCount?.active || 0,
        },
        {
            title: "Failed",
            number: data?.taskCount?.failed || 0,
        },
    ];
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center p-4 gap-3">
            <div className="h-20 w-full flex flex-col items-center justify-center bg-zinc-950 border-[.5px] border-zinc-900 p-4 gap-3 rounded-lg">
                <Header data={data} adminOrEmployee={""} />
            </div>
            <div className="flex flex-wrap h-[40%] w-full items-start justify-center gap-5 py-4">
                {tileCardName.map((card, index) => (
                    <DashboardTileCard
                        key={index}
                        className={"w-[48%]"}
                        data={data}
                        number={card.number}
                        title={card.title}
                    />
                ))}
            </div>
            <div className="flex flex-wrap h-[60%] w-full items-start justify-center gap-5 py-4 px-5">
                <TaskList data={data} />
            </div>
        </div>
    );
}
