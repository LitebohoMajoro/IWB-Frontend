import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Backend base URL
});

export const registerUser = (userData) => API.post("/users/register", userData);
export const makePayment = (paymentData) => API.post("/payments", paymentData);
