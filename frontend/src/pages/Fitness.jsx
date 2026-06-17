import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserDataContext from "../context/UserDataContext";
import Input from "../components/Input";
import Select from "../components/Select";
import Checkbox from "../components/Checkbox";
import PrimaryButton from "../components/PrimaryButton";

function FitnessLifestyle() {
  const navigate = useNavigate();

  const { userData, setUserData } =
    useContext(UserDataContext);

  const goals = [
    "Weight Loss",
    "Weight Gain",
    "Maintain Weight",
    "Build Muscle",
    "Improve Fitness",
    "PCOS Management",
    "Better Sleep",
    "Healthy Lifestyle"
  ];

  function handleGoalChange(goal) {
    if (userData.fitnessGoals.includes(goal)) {
      setUserData({
        ...userData,
        fitnessGoals:
          userData.fitnessGoals.filter(
            (item) => item !== goal
          )
      });
    } else {
      setUserData({
        ...userData,
        fitnessGoals: [
          ...userData.fitnessGoals,
          goal
        ]
      });
    }
  }

  function handleNext() {
    if (
      !userData.exerciseFrequency ||
      !userData.preferredExercise ||
      !userData.workoutExperience ||
      !userData.sleepHours ||
      !userData.stressLevel ||
      !userData.dailyStepGoal
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (
      Number(userData.sleepHours) < 1 ||
      Number(userData.sleepHours) > 24
    ) {
      alert(
        "Sleep hours must be between 1 and 24"
      );
      return;
    }

    if (
      Number(userData.dailyStepGoal) < 1000
    ) {
      alert(
        "Daily step goal must be at least 1000"
      );
      return;
    }

    if (
      userData.fitnessGoals.length === 0
    ) {
      alert(
        "Please select at least one fitness goal"
      );
      return;
    }

    navigate("/health-summary");
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Fitness & Lifestyle</h1>

        <Select
          label="Exercise Frequency"
          name="exerciseFrequency"
          value={userData.exerciseFrequency}
          onChange={(e) =>
            setUserData({
              ...userData,
              exerciseFrequency:
                e.target.value
            })
          }
          options={[
            "0 Days",
            "1-2 Days",
            "3-4 Days",
            "5-6 Days",
            "Daily"
          ]}
        />

        <Select
          label="Preferred Exercise"
          name="preferredExercise"
          value={userData.preferredExercise}
          onChange={(e) =>
            setUserData({
              ...userData,
              preferredExercise:
                e.target.value
            })
          }
          options={[
            "Gym",
            "Walking",
            "Running",
            "Yoga",
            "Home Workout",
            "Sports"
          ]}
        />

        <Select
          label="Workout Experience"
          name="workoutExperience"
          value={userData.workoutExperience}
          onChange={(e) =>
            setUserData({
              ...userData,
              workoutExperience:
                e.target.value
            })
          }
          options={[
            "Beginner",
            "Intermediate",
            "Advanced"
          ]}
        />

        <Input
          label="Sleep Hours"
          name="sleepHours"
          type="number"
          value={userData.sleepHours}
          onChange={(e) =>
            setUserData({
              ...userData,
              sleepHours:
                e.target.value
            })
          }
          placeholder="Hours of sleep per night"
        />

        <Select
          label="Stress Level"
          name="stressLevel"
          value={userData.stressLevel}
          onChange={(e) =>
            setUserData({
              ...userData,
              stressLevel:
                e.target.value
            })
          }
          options={[
            "Low",
            "Moderate",
            "High"
          ]}
        />

        <div className="medical-section">
          <h2>Fitness Goals</h2>

          <p className="section-description">
            Select all goals that apply.
          </p>

          {goals.map((goal) => (
            <Checkbox
              key={goal}
              label={goal}
              checked={userData.fitnessGoals.includes(
                goal
              )}
              onChange={() =>
                handleGoalChange(goal)
              }
            />
          ))}
        </div>

        <Input
          label="Daily Step Goal"
          name="dailyStepGoal"
          type="number"
          value={userData.dailyStepGoal}
          onChange={(e) =>
            setUserData({
              ...userData,
              dailyStepGoal:
                e.target.value
            })
          }
          placeholder="Example: 8000"
        />

        <div className="input-group">
          <label>
            Daily Physical Activities
          </label>

          <textarea
            value={
              userData.dailyPhysicalActivities
            }
            onChange={(e) =>
              setUserData({
                ...userData,
                dailyPhysicalActivities:
                  e.target.value
              })
            }
            placeholder="Enter daily physical activities (e.g. walking, cycling, climbing stairs, etc.)"
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

export default FitnessLifestyle;