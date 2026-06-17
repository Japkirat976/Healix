import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserDataContext from "../context/UserDataContext";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import Select from "../components/Select";

function BasicInfo() {
  const { userData, setUserData } =
    useContext(UserDataContext);

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value
    });
  }

  function handleNext() {
    if (
      !userData.name ||
      !userData.age ||
      !userData.height ||
      !userData.weight ||
      !userData.gender ||
      !userData.goalWeight
    ) {
      alert("Please fill all fields");
      return;
    }

    navigate("/onboarding/medical");
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Basic Information</h1>

        <Input
          label="Name"
          name="name"
          type="text"
          value={userData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <Input
          label="Age"
          name="age"
          type="number"
          value={userData.age}
          onChange={handleChange}
          placeholder="Enter your age"
        />

        <Select
          label="Gender"
          name="gender"
          value={userData.gender}
          onChange={handleChange}
          options={["Female", "Male", "Other"]}
        />

        <Input
          label="Height (cm)"
          name="height"
          type="number"
          value={userData.height}
          onChange={handleChange}
          placeholder="Enter your height in cm"
        />

        <Input
          label="Weight (kg)"
          name="weight"
          type="number"
          value={userData.weight}
          onChange={handleChange}
          placeholder="Enter your weight in kg"
        />

        <Input
          label="Goal Weight (kg)"
          name="goalWeight"
          type="number"
          value={userData.goalWeight}
          onChange={handleChange}
          placeholder="Enter your goal weight in kg"
        />

        <PrimaryButton
          text="Next →"
          onClick={handleNext}
        />

      </div>
    </div>
  );
}

export default BasicInfo;