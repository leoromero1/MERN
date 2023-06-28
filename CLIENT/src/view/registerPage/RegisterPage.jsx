import { FormRegister } from "../../components";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <section>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className=" mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
            <div className="w-full px-6 py-3">
              <div>
                <div className="mt-3 text-left sm:mt-5">
                  <div className="inline-flex items-center w-full">
                    <h3 className="text-lg font-bold text-neutral-600 l eading-6 lg:text-5xl">
                      Register
                    </h3>
                  </div>
                </div>
              </div>
              {/* <<<<<FORMULARIO>>>>>>*/}
              <FormRegister />
              <p className="flex justify-evenly text-black mt-5">
                You do not have an account?
                <Link className="ml-4 text-blue-700" to="/login">Login</Link>
              </p>
            </div>
            <div className="order-first hidden w-full h-full lg:block">
              <img
                className="object-cover h-full bg-cover rounded-l-lg"
                src="https://smoda.elpais.com/wp-content/uploads/2023/02/trabajo-1-620x470.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
