import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";

function Login() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleLogin() {
    // Required fields validation
    if (!formData.email || !formData.password) {
      alert("All fields are required");
      return;
    }

    // Email validation
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Check if account exists
    const savedUser = JSON.parse(
      localStorage.getItem("healixUser")
    );

    if (!savedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    // Email verification
    if (formData.email !== savedUser.email) {
      alert("Invalid email");
      return;
    }

    // Password verification
    if (formData.password !== savedUser.password) {
      alert("Invalid password");
      return;
    }

    // Update AuthContext
    login({
      email: savedUser.email,
      username: savedUser.username
    });

    alert("Login Successful");

    navigate("/dashboard", {
      replace: true
    });
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Login</h1>

        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />

        <Input
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
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