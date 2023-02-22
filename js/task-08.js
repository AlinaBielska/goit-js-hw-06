const form = document.querySelector(".login-form");

form.addEventListener("submit", formFunction);

function formFunction (event) {
  
  event.preventDefault();
  
  const {
    elements: {email, password}
  } = event.currentTarget;
  
  if (email.value === "" || password.value === "") {
    return alert("All fields must be completed!");
  }
  
  console.log({email: email.value, password: password.value});
  event.currentTarget.reset();
};