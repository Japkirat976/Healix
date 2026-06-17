import { useContext } from "react";
import UserDataContext from "../context/UserDataContext";
import PrimaryButton from "../components/PrimaryButton";

function Dashboard() {
  const { userData } =
    useContext(UserDataContext);

  return (
    <div className="container">
      <div className="card">
        <h1>
          Welcome, {userData.username || "User"} 👋
        </h1>

        <div className="container">

          <div className="card">
            <h3>Current Weight</h3>
            <p>{userData.weight} kg</p>
          </div>

          <div className="card">
            <h3>Goal Weight</h3>
            <p>{userData.goalWeight} kg</p>
          </div>

          <div className="card">
            <h3>Water Goal</h3>
            <p>{userData.waterIntake} L</p>
          </div>

          <div className="card">
            <h3>Sleep Goal</h3>
            <p>{userData.sleepHours} hrs</p>
          </div>

          <div className="card">
            <h3>Medical Conditions</h3>
            <p>
              {userData.medicalConditions?.join(", ")
                || "None"}
            </p>
          </div>

          <div className="card">
            <h3>Fitness Goals</h3>
            <p>
              {userData.fitnessGoals?.join(", ")
                || "None"}
            </p>
          </div>

        </div>

        <div className="container">

          <h2>Quick Actions</h2>

          <PrimaryButton text="Log Water" />

          <PrimaryButton text="Log Weight" />

          <PrimaryButton text="View Profile" />

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
