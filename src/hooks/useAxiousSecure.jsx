import axios from "axios";

const axiousSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiousSecure = () => {
  //call interceptors for every api call
  axiousSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("this is from int", token);
      config.headers.authorization = `bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiousSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    (error) => {
      console.log("error is ", error);
      return Promise.reject(error);
    }
  );

  return axiousSecure;
};

export default useAxiousSecure;
