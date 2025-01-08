/* eslint-disable react/prop-types */
import Header from "../../utils/lib/Header"; 
import AllTaskTileCard from "../Cards/AllTaskTileCard";
import CreateTaskForm from "../Forms/CreateTaskForm";

export default function AdminDashboard({ data }) {

    console.log(data)
    
    return (
        <div className="h-[90%] w-full flex flex-col items-center justify-center p-4 gap-3">
            <div className="h-20 w-full flex flex-col items-center justify-center bg-zinc-950 border-[.5px] border-zinc-900 p-4 gap-3 rounded-lg">
                <Header data={data} adminOrEmployee={"Admin"} />
            </div>
            <div className="h-full w-full flex items-start justify-center">
                <div className="flex flex-wrap h-full w-1/2 items-start justify-start gap-5 py-4">
                    <CreateTaskForm />
                </div>
                <div
                    id="tasklist"
                    className="flex flex-wrap h-full w-1/2 items-start justify-center gap-5 py-4 px-5 overflow-y-scroll"
                >
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
        </div>
    );
}
