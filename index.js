let myRecipes = [];
const btn = document.getElementById("save-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

btn.addEventListener("click", function () {
myRecipes.push(inputEl.value);
  renderRecipes()
  inputEl.value = "";
});

function renderRecipes() {
  let food = "";
  for (let i = 0; i < myRecipes.length; i++) {
    food += `<li><a target='_blank' href='${myRecipes[i]}'> ${myRecipes[i]} </a></
li>`;
  }
  ulEl.innerHTML = food;
}
