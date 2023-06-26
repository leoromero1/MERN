import { useForm } from "react-hook-form";
import { useAuth } from "../../Hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const FormRegister = () => {
  const { signUp, errors: authErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signUp(values);
  });

  return (
    <>
      {authErrors.map((error, i) => (
        <div key={i} className="bg-red-700 text-white w-fit m-2">
          {error}
        </div>
      ))}
      <form onSubmit={onSubmit} className="mt-6 space-y-2">
        <div>
          <input
            type="text"
            {...register("username", { required: true })}
            className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
            placeholder="Enter your username"
            autoComplete="false"
          />
          {errors.username && (
            <p className="text-red-700">username is required</p>
          )}
        </div>
        <div>
          <input
            type="email"
            {...register("email", { required: true })}
            className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
            placeholder="Enter your email"
            autoComplete="false"
          />
          {errors.email && <p className="text-red-700">email is required</p>}
        </div>
        <div>
          <input
            type="password"
            {...register("password", { required: true })}
            className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
            placeholder="Enter your password"
            autoComplete="false"
          />
          {errors.password && (
            <p className="text-red-700">password is required</p>
          )}
        </div>
        <div className="flex flex-col mt-4 lg:space-y-2">
          <button
            type="submit"
            className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
};
