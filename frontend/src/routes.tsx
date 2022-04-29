import { 
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Login from "./pages/Login";

export function AppRoutes() {
    return (
        <Router>
            <Routes location="/login">
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}