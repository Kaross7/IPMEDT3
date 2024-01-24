// Global variables
const dranklijst = [
    "Amaretto Cola", 
    "Apfelkorn 7-up", 
    "Apfelkorn Spa", 
    "Bacardi Cola", 
    "Bacardi Lemon Cola", 
    "Bacardi Razz 7-up", 
    "Bacardi Razz Fanta", 
    "Bessen 7-up", 
    "Bessen Jus", 
    "Gin Tonic", 
    "Gin 7-up", 
    "Malibu 7-up", 
    "Malibu Cola", 
    "Malibu Jus", 
    "Passoa Jus"
];
const numberList = [];
const ingredientList = [];



// Drankje goed gemaakt
function goodOrder (textField, ingredients) {
    textField.setAttribute("text", "value", "Je hebt de: " + "\'" + dranklijst[numberList[0]] + "\'" + "\nGoed gemaakt!");
    ingredients.setAttribute("text", "value", ingredientList[0] + "\n" + ingredientList[1] + "\n" + ingredientList[2]);
    ingredients.setAttribute("color", "rgb(0, 255, 0)");
}


// Drankje slecht gemaakt
function badOrder (textField, ingredients) {
    textField.setAttribute("text", "value", "Je hebt de: " + "\'" + dranklijst[numberList[0]] + "\'" + "\nSlecht gemaakt!");
    ingredients.setAttribute("text", "value", );
    ingredients.setAttribute("text", "value", ingredientList[0] + "\n" + ingredientList[1] + "\n" + ingredientList[2]);
    ingredients.setAttribute("color", "rgb(255, 0, 0)");
}


// Volgende bestelling
function nextOrder(textField, good, bad, ingredients) {
    const number = Math.floor(Math.random() * (dranklijst.length));
    numberList[0] = number;

    textField.setAttribute("text", "value", "Ik wil graag een " + "\'" + dranklijst[numberList[0]] + "\'");
    bad.setAttribute("position", "-1.9 0.7 -2");
    good.setAttribute("position", "1.9 0.7 -2");

    if (dranklijst[0] === dranklijst[0]) {
        ingredientList[0] = "Ingredient1";
        ingredientList[1] = "ingredient2";
        ingredientList[2] = "ingredient3";
    }

    ingredients.setAttribute("text", "value", ingredientList[0] + "\n" + ingredientList[1] + "\n" + ingredientList[2]);
}


// main
const main = () => {

    // import html elements
    const good = document.getElementById("js_good");
    const bad = document.getElementById("js_bad");
    const next = document.getElementById("js_next");
    const textField = document.getElementById("js_textfield");
    const ingredients = document.getElementById("js_ingredients");

    alert("Test");

    good.addEventListener('click',function(textField, ingredients){
        return function(){
            goodOrder(textField, ingredients);
        }
    }(textField, ingredients));

    bad.addEventListener('click',function(textField, ingredients){
        return function(){
            badOrder(textField, ingredients);
        }
    }(textField, ingredients));

    next.addEventListener('click', function(textField, good, bad, ingredients){
        return function(){
            nextOrder(textField, good, bad, ingredients);
        }
    }(textField, good, bad, ingredients));

}

window.addEventListener("load", main);