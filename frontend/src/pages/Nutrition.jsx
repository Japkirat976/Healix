import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Select from "../components/Select";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";

function Nutrition() {
  const navigate = useNavigate();

  const [nutritionData, setNutritionData] = useState({
    dietType: "",
    mealsPerDay: "",
    waterIntake: "",
    foodAllergies: "",
    likedFoods: "",
    dislikedFoods: ""
  });

  function handleNext() {
    localStorage.setItem(
      "healixNutritionInfo",
      JSON.stringify(nutritionData)
    );

    navigate("/onboarding/fitness");
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Nutrition Information</h1>

        <Select
          label="Diet Type"
          name="dietType"
          value={nutritionData.dietType}
          onChange={(e) =>
            setNutritionData({
              ...nutritionData,
              dietType: e.target.value
            })
          }
          options={[
            "Vegetarian",
            "Vegan",
            "Eggetarian",
            "Non-Vegetarian"
          ]}
        />

        <Select
          label="Meals Per Day"
          name="mealsPerDay"
          value={nutritionData.mealsPerDay}
          onChange={(e) =>
            setNutritionData({
              ...nutritionData,
              mealsPerDay: e.target.value
            })
          }
          options={[
            "2",
            "3",
            "4",
            "5+"
          ]}
        />

        <Input
          label="Water Intake (Liters)"
          type="number"
          value={nutritionData.waterIntake}
          onChange={(e) =>
            setNutritionData({
              ...nutritionData,
              waterIntake: e.target.value
            })
          }
          placeholder="Enter daily water intake"
        />

        <div className="input-group">
          <label>Food Allergies</label>

          <textarea
            value={nutritionData.foodAllergies}
            onChange={(e) =>
              setNutritionData({
                ...nutritionData,
                foodAllergies: e.target.value
              })
            }
            placeholder="Enter food allergies"
          />
        </div>

        <div className="input-group">
          <label>Foods You Like</label>

          <textarea
            value={nutritionData.likedFoods}
            onChange={(e) =>
              setNutritionData({
                ...nutritionData,
                likedFoods: e.target.value
              })
            }
            placeholder="Foods you enjoy eating"
          />
        </div>

        <div className="input-group">
          <label>Foods You Dislike</label>

          <textarea
            value={nutritionData.dislikedFoods}
            onChange={(e) =>
              setNutritionData({
                ...nutritionData,
                dislikedFoods: e.target.value
              })
            }
            placeholder="Foods you don't enjoy eating"
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

export default Nutrition;