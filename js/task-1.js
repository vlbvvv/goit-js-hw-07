const categoriesList = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((item) => {
  const categorieTitle = item.querySelector("h2").textContent;
  const categorieLength = item.querySelectorAll("ul li").length;

  console.log(`Category: ${categorieTitle}`);
  console.log(`Elements: ${categorieLength}`);
});
