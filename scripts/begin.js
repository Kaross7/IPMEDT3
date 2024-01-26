const cocktailList = [
    "Wodka Old Fashioned",
    "Wodka Sour",
    "Wodka Collins",
    "Wodka Martini",
    "Moscow Mule",
];

const recepten = [
    ["1. Vul een beker met 60 ml wodka.", "2. Voeg 30 ml vers citroensap toe.", "3. Voeg 15 ml suikersiroop toe.", "4. Schud de ingrediënten goed met ijs.", "5. Zeef de inhoud in een glas en serveer met een schijfje citroen."],
    ["1. Vul een glas met ijsblokjes.", "2. Voeg 60 ml wodka toe.", "3. Giet 120 ml ginger beer over de wodka.", "4. Voeg 15 ml vers citroensap toe.", "5. Garneer optioneel met een schijfje citroen."],
    ["1. Vul een mixglas met 60 ml wodka.", "2. Voeg 15 ml citroensap toe.", "3. Roer de ingrediënten goed door.", "4. schemk de inhoud in een glas.", "5. serveer meet schijfje citroen."],
    ["1. Vul een shaker met 60 ml wodka.", "2. Voeg 30 ml vers citroensap toe.", "3. Voeg 15 ml suikersiroop toe.", "4. Voeg 60 ml bruiswater toe.", "5. Schenk de ingrediënten goed met ijs en de inhoud in een glas. Garneer met een schijfje citroen."],
    ["1. Plaats een suikerklontje in een glas.", "2. Voeg een paar druppels Angostura bitters toe.", "3. begin te roeren .", "4. Voeg 60 ml wodka toe en roer opnieuw.", "5. Garneer met citroenschijf."]
];

const numberList = [
    "bitter",
    "water",
    "citroen",
    "schijf",
    "ginger",
    "ijs",
    "suiker",
    "siroop",
    "wodka"
];
const ingredientList = [];


function startNieuweCocktail() {

    document.getElementById('cocktailButton').addEventListener('click', showRandomCocktailInstructions);

    document.removeEventListener('click', startNieuweCocktail);
}

function showRandomCocktailInstructions() {
    const randomCocktail = getRandomCocktail();
    createCocktailInstructions(randomCocktail);
    laatCocktailZien(randomCocktail);
}

function getRandomCocktail() {
    const randomIndex = Math.floor(Math.random() * cocktailList.length);
    return cocktailList[randomIndex];
}

function laatCocktailZien(cocktail) {
    const scene = document.querySelector('a-scene');

    const newTextEntity = document.createElement('a-entity');
    newTextEntity.setAttribute('text', {
        value: 'Maak een ' + cocktail + ' \n en volg deze stappen...',
        color: 'white',
        align: 'center',
        width: 14
    });
    newTextEntity.setAttribute('position', '0 6 -10.5');

    const oldTextEntity = document.getElementById('cocktailInstructions');
    if (oldTextEntity) {
        scene.removeChild(oldTextEntity);
    }

    newTextEntity.id = 'cocktailInstructions';
    scene.appendChild(newTextEntity);
}

document.addEventListener('DOMContentLoaded', startNieuweCocktail);



function createCocktailInstructions(cocktail) {
    const container = document.getElementById('cocktailInstructionsContainer');


    const newTextEntity = document.createElement('a-entity');
    newTextEntity.setAttribute('text', {
        value: getInstructionsForCocktail(cocktail),
        color: 'white',
        align: 'left',
        width: 8
    });

    const oldTextEntities = container.querySelectorAll('a-entity');
    oldTextEntities.forEach(oldTextEntity => {
        container.removeChild(oldTextEntity);
    });

    container.appendChild(newTextEntity);

    container.setAttribute('visible', 'true');
}

function updateCheckbox(cocktail) {

    if (cocktail === 'Pornstar Martini' || cocktail === 'Whiskey Sour' || cocktail === 'Gin Tonic') {
        checkbox.setAttribute('visible', 'true');
    } else {
        checkbox.setAttribute('visible', 'false');
    }
}

function getInstructionsForCocktail(cocktail) {
    switch (cocktail) {
        case 'Wodka Sour':
            return recepten[0][0] + "\n" + recepten[0][1] + "\n" +recepten[0][2] + "\n" + recepten[0][3] + "\n" + recepten[0][4];

        case 'Moscow Mule':
            return recepten[1][0] + "\n" + recepten[1][1] + "\n" +recepten[1][2] + "\n" + recepten[1][3] + "\n" + recepten[1][4];

        case 'Wodka Martini':
            return recepten[2][0] + "\n" + recepten[2][1] + "\n" +recepten[2][2] + "\n" + recepten[2][3] + "\n" + recepten[2][4];

        case 'Wodka Collins':
            return recepten[3][0] + "\n" + recepten[3][1] + "\n" +recepten[3][2] + "\n" + recepten[3][3] + "\n" + recepten[3][4];

        case 'Wodka Old Fashioned':
            return recepten[4][0] + "\n" + recepten[4][1] + "\n" +recepten[4][2] + "\n" + recepten[4][3] + "\n" + recepten[4][4];

        default:
            return "Geen instructies beschikbaar voor deze cocktail.";
    }
}
