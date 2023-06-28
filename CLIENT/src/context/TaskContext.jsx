import { createContext, useState } from "react";
import {
  createTaskRequests,
  deleteTasksRequests,
  getTaskByIdRequests,
  getTasksRequests,
  updateTaskRequests,
} from "../api/tasks";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState([]);

  const getTasks = async () => {
    try {
      const res = await getTasksRequests();
      setTasks(res.data);
      return res;
    } catch (error) {
      const errorArray = Array.isArray(error.response.data.error)
        ? error.response.data.error
        : [error.response.data.error];
      setError(errorArray);
    }
  };
  const createTask = async (task) => {
    try {
      const res = await createTaskRequests(task);
      return res;
    } catch (error) {
      const errorArray = Array.isArray(error.response.data.error)
        ? error.response.data.error
        : [error.response.data.error];
      setError(errorArray);
    }
  };
  const deleteTask = async (id) => {
    try {
      const res = await deleteTasksRequests(id);
      if (res.status === 200) {
        setTasks(tasks.filter((task) => task._id !== id));
      }
    } catch (error) {
      const errorArray = Array.isArray(error.response.data.error)
        ? error.response.data.error
        : [error.response.data.error];
      setError(errorArray);
    }
  };

  const getTaskById = async (id) => {
    try {
      const res = await getTaskByIdRequests(id);
      return res.data;
    } catch (error) {
      const errorArray = Array.isArray(error.response.data.error)
        ? error.response.data.error
        : [error.response.data.error];
      setError(errorArray);
    }
  };

  const updateTask = async (id, task) => {
    try {
      const res = await updateTaskRequests(id, task);
      return res.data;
    } catch (error) {
      const errorArray = Array.isArray(error.response.data.error)
        ? error.response.data.error
        : [error.response.data.error];
      setError(errorArray);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        createTask,
        getTasks,
        tasks,
        deleteTask,
        getTaskById,
        updateTask,
        error
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
