const profileForm =
document.querySelector("#profileForm");

const ageInput =
document.querySelector("#age");

const heightInput =
document.querySelector("#height");

const weightInput =
document.querySelector("#weight");

const errorMessage =
document.querySelector("#errorMessage");

profileForm.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        const age =
        Number(ageInput.value);

        const height =
        Number(heightInput.value);

        const weight =
        Number(weightInput.value);

        const gender =
        document.querySelector(
            'input[name="gender"]:checked'
        );

        if(
            !age ||
            !height ||
            !weight ||
            !gender
        ){
            errorMessage.textContent =
            "Please fill all fields.";

            return;
        }

        if(age < 13 || age > 100){

            errorMessage.textContent =
            "Age must be between 13 and 100.";

            return;
        }

        if(height < 100 || height > 250){

            errorMessage.textContent =
            "Height must be between 100 and 250 cm.";

            return;
        }

        if(weight < 30 || weight > 300){

            errorMessage.textContent =
            "Weight must be between 30 and 300 kg.";

            return;
        }

        errorMessage.textContent = "";

        alert("Step 1 Complete!");

        const profileData = {
                
            age,
                
            gender: gender.value,
                
            height,
                
            weight
                
        };

        localStorage.setItem(
            "profileStep1",
            JSON.stringify(profileData)
        );

        window.location.href =
        "profile-step2.html";

    }
);