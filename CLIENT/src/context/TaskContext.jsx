import { createContext, useState } from "react";
import {
  createTaskRequests,
  deleteTasksRequests,
  getTasksRequests,
} from "../api/tasks";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await getTasksRequests();
      setTasks(res.data);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  const createTask = async (task) => {
    try {
      const res = await createTaskRequests(task);

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await deleteTasksRequests(id);
      if (res.status === 200) {
        setTasks(tasks.filter((task) =>task._id !== id))
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider value={{ createTask, getTasks, tasks, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
