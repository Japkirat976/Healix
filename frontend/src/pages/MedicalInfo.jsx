import { useState } from "react";
import Checkbox from "../components/Checkbox";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";

function MedicalInfo() {
  const navigate = useNavigate();

  const [medicalData, setMedicalData] = useState({
    medicalConditions: [],
    medications: "",
    allergies: "",
    hasReports: "No"
  });

  const conditions = [
    "PCOS",
    "Diabetes",
    "Hypothyroidism",
    "Hypertension"
  ];

  function handleConditionChange(condition) {
    if (
      medicalData.medicalConditions.includes(condition)
    ) {
      setMedicalData({
        ...medicalData,
        medicalConditions:
          medicalData.medicalConditions.filter(
            (item) => item !== condition
          )
      });
    } else {
      setMedicalData({
        ...medicalData,
        medicalConditions: [
          ...medicalData.medicalConditions,
          condition
        ]
      });
    }
  }

  function handleNext() {
    localStorage.setItem(
      "healixMedicalInfo",
      JSON.stringify(medicalData)
    );

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
            checked={medicalData.medicalConditions.includes(
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
            value={medicalData.medications}
            onChange={(e) =>
              setMedicalData({
                ...medicalData,
                medications: e.target.value
              })
            }
            placeholder="List any medications you currently take"
          />
        </div>

        <div className="input-group">
          <label>Allergies</label>

          <textarea
            value={medicalData.allergies}
            onChange={(e) =>
              setMedicalData({
                ...medicalData,
                allergies: e.target.value
              })
            }
            placeholder="List any allergies"
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