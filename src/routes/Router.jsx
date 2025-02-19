import { Route, Routes } from "react-router-dom";

import Main from "../pages/Main";

export default function AppRoutes () {
    return (
        <Routes>
            <Route element={<Main/>} path="/" exact/>
        </Routes>
    )
}