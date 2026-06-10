const foodForm =
document.querySelector("#foodForm");

const foodPreferenceInput =
document.querySelector("#foodPreference");

const favoriteFoodsInput =
document.querySelector("#favoriteFoods");

const dislikedFoodsInput =
document.querySelector("#dislikedFoods");

const dietaryRestrictionsInput =
document.querySelector("#dietaryRestrictions");

const budgetInput =
document.querySelector("#budget");

const errorMessage =
document.querySelector("#errorMessage");

foodForm.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        const foodPreference =
        foodPreferenceInput.value;

        const favouriteFoods =
        favoriteFoodsInput.value.trim();

        const dislikedFoods =
        dislikedFoodsInput.value.trim();

        const dietaryRestrictions =
        dietaryRestrictionsInput.value.trim();

        const budget =
        Number(budgetInput.value);

        if(!foodPreference) {
            errorMessage.textContent =
            "Please select a food preference.";

            return;
        }

        if (budget <= 0) {

            errorMessage.textContent =
            "Budget must be a positive number.";

            return;
        }

        errorMessage.textContent = "";

        alert("Step 2 Complete!");

        const foodData = {

            foodPreference,
                
            favouriteFoods,
                
            dislikedFoods,
                
            dietaryRestrictions,
                
            budget
                
        };

        localStorage.setItem(
            "profileStep2",
            JSON.stringify(foodData)
        );

        window.location.href =
        "profile-step3.html";

    }
);