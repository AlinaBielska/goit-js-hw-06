const inputForm = document.querySelector("#validation-input");
const inputCheckLength = Number(inputForm.getAttribute("data-length"));

inputForm.addEventListener("blur", () => {
  if (inputForm.value.length === inputCheckLength) {
    inputForm.classList.add("valid");
    inputForm.classList.remove("invalid");
  } else {
    inputForm.classList.add("invalid");
    inputForm.classList.remove("valid");
  }
});