let myRecipes = [];
const btn = document.getElementById("save-btn");
const dbtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const urlRecipes = JSON.parse(localStorage.getItem("myRecipes")); //asks browser if there's anything stored under myRecipes

if (urlRecipes) {
  //did browser find anything saved earlier?
  myRecipes = urlRecipes; //if so put's those saved recipes back into myRecipes array
  render(myRecipes); //draws them on the screen
}

tabBtn.addEventListener("click", function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    myRecipes.push(tabs[0].url)
    localStorage.setItem("myRecipes", JSON.stringify(myRecipes))
    render(myRecipes)
  })
})

btn.addEventListener("click", function () {
  myRecipes.push(inputEl.value);
  localStorage.setItem("myRecipes", JSON.stringify(myRecipes));
  render(myRecipes);
  inputEl.value = "";
});

dbtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myRecipes = [];
  render(myRecipes);
});

function render(recipes) {
  let food = "";
  for (let i = 0; i < recipes.length; i++) {
    food += `<li>
    <a target='_blank' href='${recipes[i]}'>
     ${recipes[i]} </a>
     </li>`;
  }
  ulEl.innerHTML = food;
}
