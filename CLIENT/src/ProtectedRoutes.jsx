import { useAuth } from "./Hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { isAuthenticated, loading } = useAuth();
  console.log(`Loading=${loading}, isAuth=${isAuthenticated}`);

  if (loading) return <h1>Loading...</h1>;
  if (!loading && !isAuthenticated) return <Navigate to="/login" replace />;
  return <Outlet />;
};
