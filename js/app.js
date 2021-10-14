function checkNameInput() {
    let nameInput = document.getElementById("name-input")
    let errorDiv = document.getElementById("name-error")

    if (!nameInput.checkValidity()) {
        errorDiv.innerText = nameInput.validationMessage
    } else {
        // clear the message if it is valid
        errorDiv.innerText = " "
    }

}

function checkEmailInput() {
    let emailInput = document.getElementById("email-input")
    let errorDiv = document.getElementById("email-error")

    if (!emailInput.checkValidity()) {
        errorDiv.innerText = emailInput.validationMessage
    } else {
        // clear the message if it is valid
        errorDiv.innerText = " "
    }

}

function checkAgeInput() {
    let ageInput = document.getElementById("age-input")
    let errorDiv = document.getElementById("age-error")

    if (!ageInput.checkValidity()) {
        errorDiv.innerText = ageInput.validationMessage
    } else {
        // clear the message if it is valid
        errorDiv.innerText = " "
    }

}