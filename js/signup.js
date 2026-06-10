const fullNameInput =
document.querySelector("#fullName");

const emailInput =
document.querySelector("#email");

const passwordInput =
document.querySelector("#password");

const confirmPasswordInput =
document.querySelector("#confirmPassword");

const signupForm =
document.querySelector("#signupForm");

const errorMessage =
document.querySelector("#errorMessage");

function isEmailValid(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

signupForm.addEventListener(
    "submit",
    function(event){

        event.preventDefault();


        if(fullNameInput.value.trim() === "" || 
           emailInput.value.trim() === "" || 
           passwordInput.value.trim() === "" || 
           confirmPasswordInput.value.trim() === ""){

            errorMessage.textContent =
            "Please fill all fields.";

            return;
        }

        if(!isEmailValid(emailInput.value.trim())){

            errorMessage.textContent =
            "Please enter a valid email address.";

            return;
        }

        if(passwordInput.value.trim().length < 8){

            errorMessage.textContent =
            "Password must be at least 8 characters.";

            return;
        }

        if(passwordInput.value.trim() !== confirmPasswordInput.value.trim()){

            errorMessage.textContent =
            "Passwords do not match.";

            return;
        }

        errorMessage.textContent = "";

        alert("Sign Up Successful!");

        window.location.href =
        "profile-step1.html";
    }
);