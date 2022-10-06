import { useState } from "react";
import authInstance from "../axios/authInstance";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleUserInput = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      if (user.email && user.password) {
        const registerResponse = await authInstance.post("/login", {
          email: user.email,
          password: user.password,
        });

        console.log(registerResponse);

        return;
      }
      alert("empty fields");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="text"
        name="email"
        onChange={handleUserInput}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={handleUserInput}
      />

      <button onClick={register}>Register</button>
    </div>
  );
};

export default Login;