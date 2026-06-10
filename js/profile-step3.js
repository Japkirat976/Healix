const fitnessForm =
document.querySelector("#fitnessForm");

const activityLevelInput =
document.querySelector("#activityLevel");

const occupationInput =
document.querySelector("#occupation");

const lifestyleInput =
document.querySelector("#lifestyle");

const errorMessage =
document.querySelector("#errorMessage");

fitnessForm.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        const activityLevel =
        activityLevelInput.value;

        const occupation =
        occupationInput.value.trim();

        const lifestyle =
        lifestyleInput.value.trim();

        const equipment =
        Array.from(
            document.querySelectorAll(
                'input[type="checkbox"]:checked'
            )
        ).map(
            checkbox => checkbox.value
        );

        if(!activityLevel){

            errorMessage.textContent =
            "Please select an activity level.";

            return;
        }

        if(equipment.length === 0){

            errorMessage.textContent =
            "Please select at least one equipment option.";

            return;
        }

        errorMessage.textContent = "";

        alert("Step 3 Complete!");

        const fitnessData = {

            activityLevel,
                
            equipment,
                
            occupation,
                
            lifestyle
                
        };

        localStorage.setItem(
            "profileStep3",
            JSON.stringify(fitnessData)
        );

        window.location.href =
        "profile-summary.html";

    }
);