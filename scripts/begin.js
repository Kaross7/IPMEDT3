
const cocktailList = [
    "Wodka Old Fashioned", 
    "Wodka Sour", 
    "Wodka Collins", 
    "Wodka Martini", 
    "Moscow Mule", 

];
const numberList = [];
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
            return "1. Vul een shaker met 60 ml wodka.\n2. Voeg 30 ml vers citroensap toe.\n3. Voeg 15 ml suikersiroop toe.\n4. Schud de ingrediënten goed met ijs.\n5. Zeef de inhoud in een glas en serveer met een schijfje citroen.";

        case 'Moscow Mule':
            return "1. Vul een glas met ijsblokjes.\n2. Voeg 60 ml wodka toe.\n3. Giet 120 ml ginger beer over de wodka.\n4. Voeg 15 ml vers citroensap toe.\n5. Garneer optioneel met een schijfje citroen.";

        case 'Wodka Martini':
            return "1. Vul een mixglas met 60 ml wodka.\n2. Voeg 15 ml citroensap toe.\n3. Roer de ingrediënten goed door.\n4. schemk de inhoud in een glas.\n5. serveer meet schijfje citroen.";

        case 'Wodka Collins':
            return "1. Vul een shaker met 60 ml wodka.\n2. Voeg 30 ml vers citroensap toe.\n3. Voeg 15 ml suikersiroop toe.\n4. Voeg 60 ml bruiswater toe.\n5. Schenk de ingrediënten goed met ijs en de inhoud in een glas. Garneer met een schijfje citroen.";

        case 'Wodka Old Fashioned':
            return "1. Plaats een suikerklontje in een glas.\n2. Voeg een paar druppels Angostura bitters toe.\n3. begin te roeren .\n4. Voeg 60 ml wodka toe en roer opnieuw.\n5. Garneer met citroenschijf.";

        default:
            return "Geen instructies beschikbaar voor deze cocktail.";
    }
}
