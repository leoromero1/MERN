import { useForm } from "react-hook-form";
import { useTasks } from "../../Hooks/useTasks";

export const TaskFormPage = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const { createTask } = useTasks();

  const onSubmit = handleSubmit((task) => {
    createTask(task);
  });
  return (
    <section>
      <span>rama cliente</span>
      <h1 className="flex justify-center text-gray-400">Create new Task</h1>
      <div className="mx-auto w-9/12 px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-lg p-8 shadow-2xl shadow-indigo-100 lg:col-span-3 lg:p-12">
          <form onSubmit={onSubmit} className="space-y-4 text-gray-800">
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Title"
              type="text"
              {...register("title", {required: true})}
              autoFocus
            />
            {errors.title && (
            <p className="text-red-700">username is required</p>
          )}
            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm tex"
              placeholder="Description"
              rows="3"
              {...register("description", {required: true})}
            ></textarea>
            {errors.description && (
            <p className="text-red-700">username is required</p>
          )}
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
