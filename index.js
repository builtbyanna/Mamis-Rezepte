let myRecipes = []
const btn = document.getElementById("save-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul.el")

btn.addEventListener("click", function save() {

    myRecipes.push(inputEl.value)
    ulEl.textContent = myRecipes[i]
})

