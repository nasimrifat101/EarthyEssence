import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar";

const Main = () => {
    return (
        <div className="styles">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;