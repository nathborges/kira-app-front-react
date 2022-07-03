import axios from "axios";

export const api = axios.create({
  baseURL: `https://kira-app-ia.herokuapp.com/`,
});