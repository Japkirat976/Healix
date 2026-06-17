import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserDataContext from "../context/UserDataContext";
import PrimaryButton from "../components/PrimaryButton";
import "../styles/healthSummary.css";

function HealthSummary() {
  const navigate = useNavigate();

  const { userData } = useContext(UserDataContext);

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
            <span>{userData.name}</span>
          </div>

          <div className="summary-row">
            <strong>Age</strong>
            <span>{userData.age}</span>
          </div>

          <div className="summary-row">
            <strong>Height</strong>
            <span>{userData.height} cm</span>
          </div>

          <div className="summary-row">
            <strong>Weight</strong>
            <span>{userData.weight} kg</span>
          </div>

          <div className="summary-row">
            <strong>Goal Weight</strong>
            <span>{userData.goalWeight} kg</span>
          </div>
        </div>

        {/* MEDICAL INFO */}

        <div className="summary-section">
          <h2>Medical Information</h2>

          <div className="summary-row">
            <strong>Conditions</strong>
            <span>
              {userData.medicalConditions?.join(", ") || "None"}
            </span>
          </div>

          <div className="summary-row">
            <strong>Medications</strong>
            <span>{userData.medications || "None"}</span>
          </div>

          <div className="summary-row">
            <strong>Medical Reports</strong>
            <span>{userData.hasReports || "None"}</span>
          </div>
        </div>

        {/* NUTRITION */}

        <div className="summary-section">
          <h2>Nutrition Information</h2>

          <div className="summary-row">
            <strong>Diet Type</strong>
            <span>{userData.dietType}</span>
          </div>

          <div className="summary-row">
            <strong>Meals Per Day</strong>
            <span>{userData.mealsPerDay}</span>
          </div>

          <div className="summary-row">
            <strong>Water Intake</strong>
            <span>{userData.waterIntake} L</span>
          </div>

          <div className="summary-row">
            <strong>Goals</strong>
            <span>
              {userData.goals?.join(", ") || "None"}
            </span>
          </div>
        </div>

        {/* FITNESS */}

        <div className="summary-section">
          <h2>Fitness & Lifestyle</h2>

          <div className="summary-row">
            <strong>Exercise Frequency</strong>
            <span>{userData.exerciseFrequency}</span>
          </div>

          <div className="summary-row">
            <strong>Sleep Hours</strong>
            <span>{userData.sleepHours}</span>
          </div>

          <div className="summary-row">
            <strong>Stress Level</strong>
            <span>{userData.stressLevel}</span>
          </div>

          <div className="summary-row">
            <strong>Fitness Goals</strong>
            <span>
              {userData.fitnessGoals?.join(", ") || "None"}
            </span>
          </div>

          <div className="summary-row">
            <strong>Daily Steps Goal</strong>
            <span>{userData.dailySteps}</span>
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