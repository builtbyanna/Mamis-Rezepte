let myRecipes = [];
const btn = document.getElementById("save-btn");
const dbtn = document.getElementById("delete-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const urlRecipes = JSON.parse(localStorage.getItem("myRecipes"))

if (urlRecipes) { //did I find anything saved earlier?
  myRecipes = urlRecipes //if so put those saved recipes back into myRecipes array
  renderRecipes() //draws them on the screen
}

btn.addEventListener("click", function () {
myRecipes.push(inputEl.value);
  localStorage.setItem("myRecipes", JSON.stringify(myRecipes))
  renderRecipes()
  inputEl.value = "";
});

dbtn.addEventListener("dblclick", function() {
  localStorage.clear()
  myRecipes = []
  renderRecipes()
})

function renderRecipes() {
  let food = "";
  for (let i = 0; i < myRecipes.length; i++) {
    food += `<li>
    <a target='_blank' href='${myRecipes[i]}'>
     ${myRecipes[i]} </a>
     </li>`;
  }
  ulEl.innerHTML = food;
}
