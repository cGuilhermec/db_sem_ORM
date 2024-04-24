import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import { Home } from "../pages/Home";
import { AdminPage } from "../pages/AdminPage";
import { PrivateRoute } from "./privateRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/admPage" element={<PrivateRoute />}>
          <Route path="/admPage" element={<AdminPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
