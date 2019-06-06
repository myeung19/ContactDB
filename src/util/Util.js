import axios from "axios";

export default axios.create({
    // baseURL: "http://localhost:8080",
    baseURL: "http://contactdbapi-env.ipxvr42qjz.us-west-2.elasticbeanstalk.com",
});