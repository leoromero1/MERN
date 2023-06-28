import { Link } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";

export const Navbar = () => {
  const { isAuthenticated} = useAuth();

  return (
    <nav className="bg-zinc-700 flex justify-around py-2 rounded-lg">
      <Link to="/">
        <h1 className="gap-x-2">tasks Manager</h1>
      </Link>
      <div className="flex justify-center">
        {
          isAuthenticated? <h3>Hello 🖐</h3> : ""
        }
      </div>
      <ul>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/add-task">Add task</Link>
            </li>
          </>
        ) : (
          <div className="flex gap-4">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li className="mr-4">
              <Link to="/regiter">register</Link>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
};
