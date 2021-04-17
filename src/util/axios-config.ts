import axios from "axios";

const isDev = process.env.NODE_ENV === "development";
if (isDev) axios.defaults.baseURL = "http://localhost:4001/";
else axios.defaults.baseURL = "https://api.gtcag.org/";
