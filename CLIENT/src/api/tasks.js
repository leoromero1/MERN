import axios from "./axios";

export const getTasksRequests = () => axios.get("/tasks");

export const getTaskByIdRequests = (id) => axios.get(`/task/${id}`);

export const createTaskRequests = (task) => axios.post(`/task`, task);

export const updateTaskRequests = (id, task) => axios.put(`/task/${id}`, task);

export const deleteTasksRequests = (id) => axios.delete(`/task/${id}`);
