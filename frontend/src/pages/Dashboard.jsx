import PrimaryButton from "../components/PrimaryButton";

function Dashboard() {
  const basicInfo =
    JSON.parse(localStorage.getItem("healixBasicInfo")) || {};

  const medicalInfo =
    JSON.parse(localStorage.getItem("healixMedicalInfo")) || {};

  const nutritionInfo =
    JSON.parse(localStorage.getItem("healixNutritionInfo")) || {};

  const fitnessInfo =
    JSON.parse(localStorage.getItem("healixFitnessInfo")) || {};

  return (
    <div className="container">
      <h1>
        Welcome, {basicInfo.name || "User"} 👋
      </h1>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>Current Weight</h3>
          <p>{basicInfo.weight} kg</p>
        </div>

        <div className="dashboard-card">
          <h3>Goal Weight</h3>
          <p>{basicInfo.goalWeight} kg</p>
        </div>

        <div className="dashboard-card">
          <h3>Water Goal</h3>
          <p>{nutritionInfo.waterIntake} L</p>
        </div>

        <div className="dashboard-card">
          <h3>Sleep Goal</h3>
          <p>{fitnessInfo.sleepHours} hrs</p>
        </div>

        <div className="dashboard-card">
          <h3>Medical Conditions</h3>
          <p>
            {medicalInfo.medicalConditions?.join(", ")
              || "None"}
          </p>
        </div>

        <div className="dashboard-card">
          <h3>Fitness Goals</h3>
          <p>
            {fitnessInfo.fitnessGoals?.join(", ")
              || "None"}
          </p>
        </div>

      </div>

      <div className="quick-actions">

        <h2>Quick Actions</h2>

        <PrimaryButton text="Log Water" />

        <PrimaryButton text="Log Weight" />

        <PrimaryButton text="View Profile" />

      </div>
    </div>
  );
}

export default Dashboard;