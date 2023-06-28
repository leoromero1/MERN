import { Link } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { AiOutlinePoweroff } from "react-icons/ai";
export const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="bg-zinc-700 flex justify-around py-2 rounded-lg">
      <h1 className="gap-x-2">Tasks Manager</h1>

      <div className="flex justify-center">
        {isAuthenticated ? (
          <Link to="/tasks">
            <h3>Hello {user.username}🖐</h3>
          </Link>
        ) : (
          ""
        )}
      </div>
      <ul>
        {isAuthenticated ? (
          <div className=" flex justify-center items-center gap-4">
            <li>
              <Link to="/add-task" className="hover:text-black">
                Add task
              </Link>
            </li>

            <button
              onClick={() => {
                logout();
              }}
              className="hover:text-red-700"
            >
              <Link to="/login">
                <AiOutlinePoweroff />
              </Link>
            </button>
          </div>
        ) : (
          <>
            <div className="flex gap-4">
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li className="mr-4">
                <Link to="/regiter">register</Link>
              </li>
            </div>
          </>
        )}
      </ul>
    </nav>
  );
};
