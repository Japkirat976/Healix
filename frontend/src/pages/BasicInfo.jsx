import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import Select from "../components/Select";

function BasicInfo() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    goalWeight: "",
    activityLevel: ""
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleNext() {
    localStorage.setItem(
      "healixBasicInfo",
      JSON.stringify(formData)
    );
  
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
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <Input
          label="Age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
        />

        <Input
          label="Height (cm)"
          name="height"
          type="number"
          value={formData.height}
          onChange={handleChange}
          placeholder="Enter your height in cm"
        />

        <Input
          label="Weight (kg)"
          name="weight"
          type="number"
          value={formData.weight}
          onChange={handleChange}
          placeholder="Enter your weight in kg"
        />

        <Select
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          options={["Female", "Male", "Other"]}
        />

        <Input
          label="Goal Weight (kg)"
          name="goalWeight"
          type="number"
          value={formData.goalWeight}
          onChange={handleChange}
          placeholder="Enter your goal weight in kg"
        />

        <Select
          label="Activity Level"
          name="activityLevel"
          value={formData.activityLevel}
          onChange={handleChange}
          options={["Sedentary", "Lightly Active", "Moderately Active", "Very Active", "Extra Active"]}
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