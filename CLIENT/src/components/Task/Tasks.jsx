

export const Tasks = ({ task, deleteTask }) => {
  

const deleteById = () =>{
  deleteTask(task._id)
}

  return (
    <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      <div className="relative">
        <div className="absolute top-0 right-0">
          <button onClick={deleteById} className="bg-red-700 w-7 h-7 rounded-full">X</button>
        </div>
        <div className="rounded-[10px] p-2 sm:p-6">
          <div className="flex flex-wrap gap-1">
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
              {task?.title}
            </span>
          </div>
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            {task?.description}
          </h3>
        </div>
      </div>
    </article>
  );
};
