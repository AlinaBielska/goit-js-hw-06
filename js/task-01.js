const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);


const elementsFromEachCategory = allCategories.forEach(element => {
    const elements = element.querySelectorAll("li");
    console.log('Category: ', element.firstElementChild.textContent);
    console.log('Elements: ', elements.length);
});
