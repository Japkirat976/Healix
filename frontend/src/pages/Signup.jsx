import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  function handleSignup() {
    if (
      formData.password !== formData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem(
      "healixUser",
      JSON.stringify(formData)
    );

    alert("Account Created Successfully");

    navigate("/onboarding/basic");
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Create Account</h1>

        <Input
          label="Name"
          type="text"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value
            })
          }
          placeholder="Enter your name"
        />

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
          placeholder="Enter your email"
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

        <Input
          label="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({
              ...formData,
              confirmPassword: e.target.value
            })
          }
          placeholder="Confirm password"
        />

        <PrimaryButton
          text="Create Account"
          onClick={handleSignup}
        />
      </div>
    </div>
  );
}

export default Signup;