import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Select from "../components/Select";
import UserDataContext from "../context/UserDataContext";
import PrimaryButton from "../components/PrimaryButton";
import Checkbox from "../components/Checkbox";

function MedicalInfo() {
  const navigate = useNavigate();

  const { userData, setUserData } = useContext(UserDataContext);

  const conditions = [
    "PCOS",
    "Diabetes",
    "Hypothyroidism",
    "Hypertension"
  ];

  function handleConditionChange(condition) {
    if (
      userData.medicalConditions.includes(condition)
    ) {
      setUserData({
        ...userData,
        medicalConditions:
          userData.medicalConditions.filter(
            (item) => item !== condition
          )
      });
    } else {
      setUserData({
        ...userData,
        medicalConditions: [
          ...userData.medicalConditions,
          condition
        ]
      });
    }
  }

  function handleNext() {
    navigate("/onboarding/nutrition");
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Medical Profile</h1>

        <h2>Medical Conditions</h2>

        <p className="section-description">
          Select all conditions that apply.
        </p>

        {conditions.map((condition) => (
          <Checkbox
            key={condition}
            label={condition}
            checked={userData.medicalConditions.includes(
              condition
            )}
            onChange={() =>
              handleConditionChange(condition)
            }
          />
        ))}

        <div className="input-group">
          <label>Current Medications</label>

          <textarea
            value={userData.medications}
            onChange={(e) =>
              setUserData({
                ...userData,
                medications: e.target.value
              })
            }
            placeholder="List any medications you currently take"
          />
        </div>

      <div className="input-group">
        <Select
          label="Do you have any medical reports?"
          value={userData.hasReports}
          onChange={(e) =>
            setUserData({
              ...userData,
              hasReports: e.target.value
            })
          }
          options={["Yes", "No"]}
        />
      </div>

        <PrimaryButton
          text="Next →"
          onClick={handleNext}
        />
      </div>
    </div>
  );
}

export default MedicalInfo;