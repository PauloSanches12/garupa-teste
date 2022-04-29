import { 
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import ListData from "./pages/ListData";
import Login from "./pages/Login";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/list" element={<ListData />} />
            </Routes>
        </Router>
    )
}