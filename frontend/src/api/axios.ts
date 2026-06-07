import axios from "axios";
console.log("API URL in axios.ts:", import.meta.env.VITE_API_URL);
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});