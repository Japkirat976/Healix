import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserDataContext from "../context/UserDataContext";
import Select from "../components/Select";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";

function Nutrition() {
  const navigate = useNavigate();

  const { userData, setUserData } = useContext(UserDataContext);

  function handleChange(e) {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value
    });
  }

  function handleNext() {

    if (!userData.dietType ||
        !userData.foodAllergies ||
        !userData.monthlyFoodBudget
    ) {
      alert("Please fill Diet Type, Food Allergies and Food budget fields.");
      return;
    }

    if (userData.monthlyFoodBudget < 500) {
      alert("Food budget needs to be more than 500 for a month");
    }
    
    navigate("/onboarding/fitness");
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Nutrition Information</h1>

        <Select
          label="Diet Type"
          name="dietType"
          value={userData.dietType}
          onChange={(e) =>
            setUserData({
              ...userData,
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
          value={userData.mealsPerDay}
          onChange={(e) =>
            setUserData({
              ...userData,
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
          value={userData.waterIntake}
          onChange={(e) =>
            setUserData({
              ...userData,
              waterIntake: e.target.value
            })
          }
          placeholder="Enter daily water intake"
        />

        <div className="input-group">
          <label>Food Allergies</label>

          <textarea
            value={userData.foodAllergies}
            onChange={(e) =>
              setUserData({
                ...userData,
                foodAllergies: e.target.value
              })
            }
            placeholder="Enter food allergies (If none, fill NA)"
          />
        </div>

        <div className="input-group">
          <label>Foods You Like</label>

          <textarea
            value={userData.likedFoods}
            onChange={(e) =>
              setUserData({
                ...userData,
                likedFoods: e.target.value
              })
            }
            placeholder="Foods you enjoy eating"
          />
        </div>

        <div className="input-group">
          <label>Foods You Dislike</label>

          <textarea
            value={userData.dislikedFoods}
            onChange={(e) =>
              setUserData({
                ...userData,
                dislikedFoods: e.target.value
              })
            }
            placeholder="Foods you don't enjoy eating"
          />
        </div>

        <Input
          label="Food Budget (Monthly)"
          name="monthlyFoodBudget"
          type="number"
          value={userData.monthlyFoodBudget}
          onChange={handleChange}
          placeholder="Monthly Food Budget"
        />

        <PrimaryButton
          text="Next →"
          onClick={handleNext}
        />
      </div>
    </div>
  );
}

export default Nutrition;