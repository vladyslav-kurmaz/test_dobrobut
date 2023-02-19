import { Outlet } from "react-router-dom";
import Header from "../header/header";

function Overlay() {

    return (
        <>
            <Header/>
            <Outlet/>
        </>

    )
}

export default Overlay;