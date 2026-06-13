import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  function handleLogin() {

    const savedUser =
      JSON.parse(
        localStorage.getItem("healixUser")
      );

    if (!savedUser) {
      alert("No account found");
      return;
    }

    if (
      formData.email !== savedUser.email
    ) {
      alert("Invalid Email");
      return;
    }

    if (
      formData.password !== savedUser.password
    ) {
      alert("Invalid Password");
      return;
    }

    alert("Login Successful");

    navigate("/dashboard");
  }

  return (
    <div className="container">
      <div className="card">

        <h1>Login</h1>

        <Input
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value
            })
          }
          placeholder="Enter email"
        />

        <Input
          label="Password"
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value
            })
          }
          placeholder="Enter password"
        />

        <PrimaryButton
          text="Login"
          onClick={handleLogin}
        />

      </div>
    </div>
  );
}

export default Login;