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

const bmi =
step1.weight /
((step1.height / 100) ** 2);

const water =
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

document.querySelector("#bmi")
.textContent =
bmi.toFixed(1);

document.querySelector("#calories")
.textContent =
Math.round(calories) + " kcal";

document.querySelector("#water")
.textContent =
water.toFixed(1) + " L";

document.querySelector("#goal")
.textContent =
document.querySelector("#goal")
.textContent =
step1.goalWeight + " kg";;

document.querySelector("#food")
.textContent =
step2.foodPreference;

document.querySelector("#activity")
.textContent =
step3.activityLevel;