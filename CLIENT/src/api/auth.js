import axios from "./axios";


export const registerRequest = async (user) => {
  try {
    const response = await axios.post(`/register`, user);
    return response.data;
  } catch (error) {
    throw error
  }
};

export const loginRequest = async (user) => {
  try {
    const response = await axios.post(`/login`, user);
    return response.data;
  } catch (error) {
    throw error
  }
};

export const verifyToken = async () => {
  try {
    const response = await axios.post(`/verify`);
    return response.data;
  } catch (error) {
    throw error
  }
};

