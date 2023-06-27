import { useEffect } from "react";
import { useTasks } from "../../Hooks/useTasks";
import { Tasks } from "../../components";

export const TaskPage = () => {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <section>
      <h1 className="flex justify-center">Tasks</h1>
      <div>
        {tasks.map((task) => (
          <Tasks key={task._id} task={task} />
        ))}
      </div>
    </section>
  );
};
