import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiousSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiousSecure = () => {

  return [axiousSecure];
};

export default useAxiousSecure;
