const categoriesList = document.getElementById(`categories`);
//const categoriesItems = categoriesList.children;
const categoriesItems = document.querySelectorAll(`.item`);

console.log(`Number of categories:`, categoriesItems.length);

categoriesItems.forEach((category) => {
    console.log(category.firstElementChild.textContent);
    console.log(category.lastElementChild.children.length);
})

// Array.from(categoriesItems).forEach((item) => {
//     const categoryTitle = document.querySelector(`h2`).textContent;
//     const categoryElements = item.querySelectorAll(`li`).length;

//     console.log(`\nCategory: ${categoryTitle}`);
//     console.log(`Elements: ${categoryElements}`);
// })