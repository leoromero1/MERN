// import { useAuth } from "../../Hooks/useAuth"
import { useForm } from "react-hook-form";
export const TasksPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <section>
      <span className="flex justify-start bg-slate-600">MASTER</span>
      <div className="mx-auto w-9/12 px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-lg p-8 shadow-2xl shadow-indigo-100 lg:col-span-3 lg:p-12">
          <form onSubmit={onSubmit} className="space-y-4 text-gray-800">
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Title"
              type="text"
              {...register("title")}
              autoFocus
            />
            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm tex"
              placeholder="Description"
              rows="3"
              {...register('description')}
            ></textarea>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="w-full rounded bg-indigo-600 text-white hover:bg-indigo-500 sm:w-auto px-5 py-3"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
