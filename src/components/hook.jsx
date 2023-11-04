import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCollection } from "./Util";

export const useLoan = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    contactAddress: "",
    amount: "",
  });

  const handleChange = (key, value) => {
    setInputs({ ...inputs, [key]: value });
  };

  const addTask = async (event) => {
    event.preventDefault();
    const docRef = await createCollection("tasks", inputs);
    navigate("/");
  };

  return {
    inputs,
    handleChange,
    addTask,
  };
};