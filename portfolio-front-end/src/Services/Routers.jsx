import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home.jsx";
import Creative from "../Creative/Creative.jsx";
import Development from "../Development/Development.jsx";
import About from "../About/About.jsx";

export default function Routers() {
    return (
        <>
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/creative"} element={<Creative />} />
            <Route path={"/development"} element={<Development />} />
            <Route path={"/about"} element={<About />} />
        </Routes>
        </>
    )
}