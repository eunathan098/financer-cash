
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Dashboard from "../src/components/DashBoard/DashBoard"

function App() {
    return (
        <BrowserRouter basename="/financer-cash">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
