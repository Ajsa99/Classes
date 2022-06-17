const from = document.getElementById("signup");
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const passwordInput = document.getElementById("password");
const data = document.getElementById("date");

const isEmpty = (input, errorId) => {
  if (input.value === "") {
    document.getElementById("errorId").textContent = "Please input something";
    return false;
  } else {
    document.getElementById(errorId).textContent = "";
    return true;
  }
};

const valid = (input, errorId) => {
  switch (input.id) {
    case "name":
      break;
    case "surname":
      break;
    case "password":
      break;
    case "date":
      break;
  }
};

const submitFunction = (event) => {
  event.preventDefault();
  //   if (nameInput.value === "") {
  //     document.getElementById("nameError").textContent = "Please input something";
  //   }

  //   console.log("Submit");

  const nameValid = valid(nameInput, "errorName");
  const surnameValid = valid(surnameInput, "errorName");
  const passwordValid = valid(passwordInput, "errorName");
  const dateValid = valid(date, "errorName");
};

from.addEventListener("submit", submitFunction);
