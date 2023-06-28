import { Routes, Route, useLocation } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import {
  Error404,
  Home,
  LoginPage,
  ProfilePage,
  RegisterPage,
  TaskFormPage,
  TaskPage,
} from "./view";
import { Navbar } from "./components";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/add-task" element={<TaskFormPage />} />
          <Route path="/tasks/:id" element={<TaskFormPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
