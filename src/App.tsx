
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Dashboard from "../src/pages/DashBoard/DashBoard"
import Receitas from "./pages/Receitas/Receitas";
import Despesas from "./pages/Despesas/Despesas";

function App() {
    return (
        <BrowserRouter basename="/financer-cash">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/receitas" element={<Receitas/>} />
                <Route path="/despesas" element={<Despesas />} />
                {/* <Route path="/relatorio-geral" element={<RelatorioGeral />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
