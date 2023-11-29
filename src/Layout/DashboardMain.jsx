import { Outlet } from "react-router-dom";
import DashMenu from "../Dashboard/Component/DashMenu";

const DashboardMain = () => {
    return (
        <div className="flex">
            <DashMenu></DashMenu>
            <Outlet></Outlet>
        </div>
    )
}

export default DashboardMain;