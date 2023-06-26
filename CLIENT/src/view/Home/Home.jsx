import { Button } from "../../components";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link className="mr-2" to="/login">
        <Button name="Login" />
      </Link>
      <Link className="ml-2" to="register">
        <Button name="register" />
      </Link>
    </div>
  );
};
