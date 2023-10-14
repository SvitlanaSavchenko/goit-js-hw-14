// Bикористовується метод querySelectorAll для вибору всіх елементів li.item в списку ul#categories.. далі він проходить цей список за допомогою методу forEach і для кожного елемента знаходить назву категорії і кількість елементів в цій категорії.. результат виводиться в консолі.

const categoriesList = document.querySelectorAll("ul#categories .item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItems = category.querySelectorAll("ul li");
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItems.length}`);
});
