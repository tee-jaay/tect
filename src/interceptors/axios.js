import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_HOST;
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('token')}`;
