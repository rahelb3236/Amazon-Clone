import axios from "axios";
const axiosInstance =axios.create({
    // baseURL:"http://localhost:5000",
    baseURL:"https://amazon-api-8yfr.onrender.com",


});

export{axiosInstance};