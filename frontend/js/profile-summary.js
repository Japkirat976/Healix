const step1 =
JSON.parse(
localStorage.getItem("profileStep1")
);

const step2 =
JSON.parse(
localStorage.getItem("profileStep2")
);

const step3 =
JSON.parse(
localStorage.getItem("profileStep3")
);

const summaryContainer =
document.querySelector("#summaryContainer");

const bmi =
step1.weight /
((step1.height / 100) ** 2);

const waterIntake =
(step1.weight * 35) / 1000;

let calories;

switch(step3.activityLevel){

    case "Sedentary":
        calories = step1.weight * 24;
        break;

    case "Lightly Active":
        calories = step1.weight * 28;
        break;

    case "Moderately Active":
        calories = step1.weight * 32;
        break;

    case "Very Active":
        calories = step1.weight * 36;
        break;

    default:
        calories = step1.weight * 24;
}

summaryContainer.innerHTML = `
<h2>BMI</h2>
<p>${bmi.toFixed(1)}</p>

<h2>Water Intake</h2>
<p>${waterIntake.toFixed(1)} L/day</p>

<h2>Estimated Calories</h2>
<p>${Math.round(calories)} kcal/day</p>

<h2>Food Preference</h2>
<p>${step2.foodPreference}</p>

<h2>Equipment</h2>
<p>${step3.equipment.join(", ")}</p>
`;