import { Routes, Route } from "react-router-dom";
import {
  Error404,
  Home,
  LoginPage,
  ProfilePage,
  RegisterPage,
  TaskFormPage,

} from "./view";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { TasksPage } from "./view/TasksPage/TaskPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/add-task" element={<TaskFormPage />} />
        <Route path="/tasks/:id" element={<TaskFormPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
