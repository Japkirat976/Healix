const loginForm =
document.querySelector("#loginForm");

const emailInput =
document.querySelector("#email");

const passwordInput =
document.querySelector("#password");

const errorMessage =
document.querySelector("#errorMessage");

loginForm.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        const email =
        emailInput.value.trim();

        const password =
        passwordInput.value.trim();

        if(email === "" || password === ""){

            errorMessage.textContent =
            "Please fill all fields.";

            return;
        }

        errorMessage.textContent = "";

        alert("Login Successful!");
    }
);