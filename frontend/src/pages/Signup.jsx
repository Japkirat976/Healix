import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserDataContext from "../context/UserDataContext";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";

function Signup() {
  const navigate = useNavigate();

  const [passwordData, setPasswordData] = useState({
    password: "",
    confirmPassword: ""
  });

  const { userData, setUserData } = useContext(UserDataContext);

  function handleSignup() {

    if (
      !userData.username ||
      !userData.email ||
      !passwordData.password ||
      !passwordData.confirmPassword
    ) {
      alert("All fields are required");
      return;
    }
  
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(userData.email)) {
      alert("Please enter a valid email");
      return;
    }
  
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  
    if (!passwordRegex.test(passwordData.password)) {
      alert(
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special symbol"
      );
      return;
    }
  
    if (
      passwordData.password !==
      passwordData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    const existingUser =
      JSON.parse(localStorage.getItem("healixUser"));
      
    if (
      existingUser &&
      existingUser.email === userData.email
    ) {
      alert("An account with this email already exists");
      return;
    }
  
    localStorage.setItem(
      "healixUser",
      JSON.stringify({
        username: userData.username,
        email: userData.email,
        password: passwordData.password
      })
    );
  
    alert("Account Created Successfully");
  
    navigate("/onboarding/basic");
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Create Account</h1>

        <Input
          label="Username"
          type="text"
          value={userData.username}
          onChange={(e) =>
            setUserData({
              ...userData,
              username: e.target.value
            })
          }
          placeholder="Enter your username"
        />

        <Input
          label="Email"
          type="email"
          value={userData.email}
          onChange={(e) =>
            setUserData({
              ...userData,
              email: e.target.value
            })
          }
          placeholder="Enter your email"
        />

        <Input
          label="Password"
          type="password"
          value={passwordData.password}
          onChange={(e) =>
            setPasswordData({
              ...passwordData,
              password: e.target.value
            })
          }
          placeholder="Enter password"
        />

        <Input
          label="Confirm Password"
          type="password"
          value={passwordData.confirmPassword}
          onChange={(e) =>
            setPasswordData({
              ...passwordData,
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