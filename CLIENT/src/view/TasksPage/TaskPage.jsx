import { useEffect } from "react";
import { useTasks } from "../../Hooks/useTasks";
import { Tasks } from "../../components";
import { useAuth } from "../../Hooks/useAuth";

export const TaskPage = () => {
  const { getTasks, tasks, deleteTask } = useTasks();
  const { user } = useAuth();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <section>
      <h1 className="flex justify-center">Tasks</h1>
      <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-3">
        {tasks.length === 0 ? (
          <h1>Add tasks</h1>
        ) : (
          tasks.map((task) => (
            <Tasks
              key={task._id}
              task={task}
              deleteTask={deleteTask}
              user={user}
            />
          ))
        )}
      </div>
    </section>
  );
};
