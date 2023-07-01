const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.getElementById(`ingredients`);


for (let i = 0; i < ingredients.length; i += 1) {
  const ingredient = ingredients[i];
  const item = document.createElement(`li`);
  item.textContent = ingredient;

  item.classList.add(`item`);
  ingredientsList.append(item);

}


  