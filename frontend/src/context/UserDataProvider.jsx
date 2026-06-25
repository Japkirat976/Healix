import { useState, useEffect } from "react";
import UserDataContext from "./UserDataContext";

export const UserDataProvider = ({ children }) => {

  const [userData, setUserData] = useState(() => {

    const defaultData = {
      username: "",
      email: "",
    
      name: "",
      age: "",
      gender: "",
      height: "",
      weight: "",
      goalWeight: "",
    
      medicalConditions: [],
      medications: "",
      hasReports: false,
    
      dietType: "",
      mealsPerDay: "",
      waterIntake: "",
      foodAllergies: [],
      likedFoods: [],
      dislikedFoods: [],
      monthlyFoodBudget: "",
    
      exerciseFrequency: "",
      preferredExercise: "",
      workoutExperience: "",
      sleepHours: "",
      stressLevel: "",
      fitnessGoals: [],
      dailyStepGoal: "",
      dailyPhysicalActivities: ""
    };
  
    const savedData =
      localStorage.getItem("healixUserData");
  
    if (!savedData) {
      return defaultData;
    }
  
    try {
      return {
        ...defaultData,
        ...JSON.parse(savedData)
      };
    } catch {
      return defaultData;
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "healixUserData",
      JSON.stringify(userData)
    );
  }, [userData]);

  return (
    <UserDataContext.Provider
      value={{
        userData,
        setUserData
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};