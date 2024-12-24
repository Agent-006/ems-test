import DashboardTileCard from "../Cards/DashboardTileCard";
import CreateTaskForm from "../Forms/CreateTaskForm";
import Header from "../../utils/lib/Header";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log("clicked");
        navigate(`/abc`);
    };

    return (
        <div className="h-full w-full flex flex-col items-center justify-center p-4 gap-3">
            <div className="h-20 w-full flex flex-col items-center justify-center bg-zinc-950 border-[.5px] border-zinc-900 p-4 gap-3 rounded-lg">
                <Header adminOrEmployee={"Admin"} />
            </div>
            <div className="flex flex-wrap h-[40%] w-full items-start justify-center gap-5 py-4">
              {/* FIXME: onClick funtion */}
                <DashboardTileCard
                    onClick={handleClick}
                    className={"cursor-pointer"}
                    number={"+"}
                    title={"Create Task"}
                />
                <DashboardTileCard
                    onClick={handleClick}
                    className={"cursor-pointer"}
                    number={"+"}
                    title={"Create Task"}
                />
            </div>
            <div className="flex flex-wrap h-[90%] w-full items-start justify-center gap-5 py-4 px-5">
                <CreateTaskForm />
            </div>
        </div>
    );
}
