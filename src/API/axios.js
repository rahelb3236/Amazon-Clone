import axios from "axios";
const axiosInstance =axios.create({
    // baseURL:"http://localhost:5000",
    baseURL:"https://amazon-api-deploy-vt7p.onrender.com",


});

export{axiosInstance};