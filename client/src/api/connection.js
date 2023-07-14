import axios from "axios";

export const connection = axios.create({
  baseURL: process.env.REACT_APP_TARGET,
});
