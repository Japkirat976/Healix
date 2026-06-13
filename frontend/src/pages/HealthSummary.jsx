import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import "../styles/healthSummary.css";

function HealthSummary() {
  const navigate = useNavigate();

  const basicInfo =
    JSON.parse(localStorage.getItem("healixBasicInfo")) || {};

  const medicalInfo =
    JSON.parse(localStorage.getItem("healixMedicalInfo")) || {};

  const nutritionInfo =
    JSON.parse(localStorage.getItem("healixNutritionInfo")) || {};

  const fitnessInfo =
    JSON.parse(localStorage.getItem("healixFitnessInfo")) || {};

  function handleContinue() {
    navigate("/dashboard");
  }

  return (
    <div className="container">
      <div className="card">

        <div className="success-banner">
          🎉 Profile setup completed successfully!
        </div>

        <h1>Health Summary</h1>

        <p className="summary-subtitle">
          Review your information before continuing.
        </p>

        {/* BASIC INFO */}

        <div className="summary-section">
          <h2>Basic Information</h2>

          <div className="summary-row">
            <strong>Name</strong>
            <span>{basicInfo.name}</span>
          </div>

          <div className="summary-row">
            <strong>Age</strong>
            <span>{basicInfo.age}</span>
          </div>

          <div className="summary-row">
            <strong>Height</strong>
            <span>{basicInfo.height} cm</span>
          </div>

          <div className="summary-row">
            <strong>Weight</strong>
            <span>{basicInfo.weight} kg</span>
          </div>

          <div className="summary-row">
            <strong>Goal Weight</strong>
            <span>{basicInfo.goalWeight} kg</span>
          </div>
        </div>

        {/* MEDICAL INFO */}

        <div className="summary-section">
          <h2>Medical Information</h2>

          <div className="summary-row">
            <strong>Conditions</strong>
            <span>
              {medicalInfo.medicalConditions?.join(", ") || "None"}
            </span>
          </div>

          <div className="summary-row">
            <strong>Medications</strong>
            <span>{medicalInfo.medications || "None"}</span>
          </div>

          <div className="summary-row">
            <strong>Allergies</strong>
            <span>{medicalInfo.allergies || "None"}</span>
          </div>
        </div>

        {/* NUTRITION */}

        <div className="summary-section">
          <h2>Nutrition Information</h2>

          <div className="summary-row">
            <strong>Diet Type</strong>
            <span>{nutritionInfo.dietType}</span>
          </div>

          <div className="summary-row">
            <strong>Meals Per Day</strong>
            <span>{nutritionInfo.mealsPerDay}</span>
          </div>

          <div className="summary-row">
            <strong>Water Intake</strong>
            <span>{nutritionInfo.waterIntake} L</span>
          </div>

          <div className="summary-row">
            <strong>Goals</strong>
            <span>
              {nutritionInfo.goals?.join(", ") || "None"}
            </span>
          </div>
        </div>

        {/* FITNESS */}

        <div className="summary-section">
          <h2>Fitness & Lifestyle</h2>

          <div className="summary-row">
            <strong>Exercise Frequency</strong>
            <span>{fitnessInfo.exerciseFrequency}</span>
          </div>

          <div className="summary-row">
            <strong>Sleep Hours</strong>
            <span>{fitnessInfo.sleepHours}</span>
          </div>

          <div className="summary-row">
            <strong>Stress Level</strong>
            <span>{fitnessInfo.stressLevel}</span>
          </div>

          <div className="summary-row">
            <strong>Fitness Goals</strong>
            <span>
              {fitnessInfo.fitnessGoals?.join(", ") || "None"}
            </span>
          </div>

          <div className="summary-row">
            <strong>Daily Steps Goal</strong>
            <span>{fitnessInfo.dailySteps}</span>
          </div>
        </div>

        <PrimaryButton
          text="Continue to Dashboard"
          onClick={handleContinue}
        />
      </div>
    </div>
  );
}

export default HealthSummary;