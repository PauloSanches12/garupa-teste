import { 
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import ListData from "./pages/Beer-list";
import Login from "./pages/Login";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate replace to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/beer-list" element={<ListData />} />
            </Routes>
        </Router>
    )
}