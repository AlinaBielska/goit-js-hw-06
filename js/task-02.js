const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const newIngredients = ingredients.forEach(element => {
    const newIngredient = document.createElement("li");
  newIngredient.textContent = element;
  newIngredient.classList.add("item");
  list.append(newIngredient);
});






