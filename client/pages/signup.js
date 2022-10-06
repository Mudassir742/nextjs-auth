import { useState } from "react";
import authInstance from "../axios/authInstance";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleUserInput = (e) =>{
    e.preventDefault();
    setUser({...user,[e.target.name]:e.target.value})
  }

  const register = async (e) => {
    e.preventDefault();

    try {
      if (user.name && user.email && user.password) {
        
        const registerResponse = await authInstance.post("/register", {
          name: user.name,
          email: user.email,
          password: user.password,
        });

        console.log(registerResponse)

        return;
      }
      alert("empty fields");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <input type="email" placeholder="name" name="email"/>
      <input type="text" placeholder="text" name="email"/>
      <input type="password" pattern="password" name="password"/>

      <button onClick={register}>Register</button>
    </div>
  );
};

export default Signup;
