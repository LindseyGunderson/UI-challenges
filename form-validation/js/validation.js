
// create utility functions
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

// get id items
let username = id("username"),
    email = id("email"),
    password = id("password"),
    signupForm = id("signup-form"),

    // get classes items
    errorMsg = classes("error-msg"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

// check validation - make sure all the inputs are filled out
let validationCheck = (id, target, msg) => {

    if(id.value.trim() === ""){

        // add a message tp the incorrect element
        errorMsg[target].innerHTML = msg;
        id.style.border = "2px solid red";

        // show the failure icon
        failureIcon[target].style.opacity = "1";

        // hide the success icon
        successIcon[target].style.opacity = "0";

    } else {

        errorMsg[target].innerHTML = "";
        id.style.border = "2px solid green";

        // hide the failure icon
        failureIcon[target].style.opacity= "0";
        successIcon[target].style.opacity = "1";

    }
}



// create event listener for form submit

signupForm.addEventListener("submit", (e) => {

    e.preventDefault();

    validationCheck(username, 0, "Please enter a username");
    validationCheck(email, 1, "Please enter a valid email address");
    validationCheck(password, 2, "Please enter a password");


});