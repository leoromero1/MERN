import axios from "./axios";

export const getTasksRequests = () => axios.get("/tasks");

export const getTaskByIdRequests = (id) => axios.get(`/tasks/${id}`);

export const createTaskRequests = (task) => axios.post(`/task`, task);

export const updateTaskRequests = (task) =>
  axios.get(`/tasks/${task._id}`, task);

export const deleteTasksRequests = (id) => axios.delete(`/task/${id}`);
