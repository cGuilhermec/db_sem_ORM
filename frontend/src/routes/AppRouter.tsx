import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import { Home } from "../pages/Home";
import { AdminPage } from "../pages/AdminPage";
import { PrivateRoute } from "./privateRoutes";
import RegisterEditUser from "../pages/RegisterEditUser";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/register" element={<PrivateRoute />}>
          <Route path="/register" element={<RegisterEditUser />} />
        </Route>
        <Route path="/admPage" element={<PrivateRoute />}>
          <Route path="/admPage" element={<AdminPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
