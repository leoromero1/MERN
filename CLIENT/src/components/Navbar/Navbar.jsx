import { Link } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import {  } from "";
export const Navbar = () => {
  const { isAuthenticated, user} = useAuth();

  return (
    <nav className="bg-zinc-700 flex justify-around py-2 rounded-lg">
      
        <h1 className="gap-x-2">Tasks Manager</h1>
      
      <div className="flex justify-center">
        {
          isAuthenticated? <Link to="/tasks"><h3>Hello {user.username}🖐</h3></Link> : ""
        }
      </div>
      <ul>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/add-task" className="hover:text-black">Add task</Link>
            </li>
            <li>

            </li>
          </>
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
          <div>
              <li>

              </li>
          </div>
          </>
        )}
      </ul>
    </nav>
  );
};
