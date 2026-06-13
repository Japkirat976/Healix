import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../components/Input";
import Select from "../components/Select";
import Checkbox from "../components/Checkbox";
import PrimaryButton from "../components/PrimaryButton";

function FitnessLifestyle() {
  const navigate = useNavigate();

  const [fitnessData, setFitnessData] = useState({
    exerciseFrequency: "",
    preferredExercise: "",
    workoutExperience: "",
    sleepHours: "",
    stressLevel: "",
    fitnessGoals: [],
    dailyStepGoal: "",
    dailyPhysicalActivities: ""
  });

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
    if (fitnessData.fitnessGoals.includes(goal)) {
      setFitnessData({
        ...fitnessData,
        fitnessGoals: fitnessData.fitnessGoals.filter(
          (item) => item !== goal
        )
      });
    } else {
      setFitnessData({
        ...fitnessData,
        fitnessGoals: [
          ...fitnessData.fitnessGoals,
          goal
        ]
      });
    }
  }

  function handleNext() {
    localStorage.setItem(
      "healixFitnessInfo",
      JSON.stringify(fitnessData)
    );

    navigate("/health-summary");
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Fitness & Lifestyle</h1>

        <Select
          label="Exercise Frequency"
          name="exerciseFrequency"
          value={fitnessData.exerciseFrequency}
          onChange={(e) =>
            setFitnessData({
              ...fitnessData,
              exerciseFrequency: e.target.value
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
          value={fitnessData.preferredExercise}
          onChange={(e) =>
            setFitnessData({
              ...fitnessData,
              preferredExercise: e.target.value
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
          value={fitnessData.workoutExperience}
          onChange={(e) =>
            setFitnessData({
              ...fitnessData,
              workoutExperience: e.target.value
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
          type="number"
          value={fitnessData.sleepHours}
          onChange={(e) =>
            setFitnessData({
              ...fitnessData,
              sleepHours: e.target.value
            })
          }
          placeholder="Hours of sleep per night"
        />

        <Select
          label="Stress Level"
          name="stressLevel"
          value={fitnessData.stressLevel}
          onChange={(e) =>
            setFitnessData({
              ...fitnessData,
              stressLevel: e.target.value
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
              checked={fitnessData.fitnessGoals.includes(
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
          type="number"
          value={fitnessData.dailyStepGoal}
          onChange={(e) =>
            setFitnessData({
              ...fitnessData,
              dailyStepGoal: e.target.value
            })
          }
          placeholder="Example: 8000"
        />

        <div className="input-group">
          <label>Daily Physical Activities</label>

          <textarea
            value={fitnessData.dailyPhysicalActivities}
            onChange={(e) =>
              setFitnessData({
                ...fitnessData,
                dailyPhysicalActivities: e.target.value
              })
            }
            placeholder="Enter daily physical activities (e.g., walking, cycling, climbing stairs, etc.)"
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