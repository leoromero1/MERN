import { useEffect } from "react";
import { useTasks } from "../../Hooks/useTasks";
import { Tasks } from "../../components";

export const TaskPage = () => {
  const { getTasks, tasks, deleteTask } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <section>
      <h1 className="flex justify-center">Tasks</h1>
      <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-3">
        {tasks.map((task) => (
          <Tasks key={task._id} task={task} deleteTask={deleteTask}/>
        ))}
      </div>
    </section>
  );
};
