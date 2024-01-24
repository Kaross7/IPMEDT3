
const cocktailList = [
    "Pornstar Martini", 
    "Whiskey Sour", 
    "Bacardi Lemon Cola", 
    "Bessen Jus", 
    "Gin Tonic", 

];
const numberList = [];
const ingredientList = [];


function startAudioContext() {
    const audio = document.getElementById('background-music');
    if (audio.components.sound) {
        audio.components.sound.playSound();
    }

    document.getElementById('cocktailButton').addEventListener('click', showRandomCocktailInstructions);

    document.removeEventListener('click', startAudioContext);
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

document.addEventListener('DOMContentLoaded', startAudioContext);

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
        case 'Pornstar Martini':
            return "1. Voeg 60 ml vanille-wodka toe aan een shaker.\n2. Voeg 30 ml passievruchtensap toe aan de shaker.\n3. Voeg 15 ml vanillesiroop toe.\n4. Schud de ingrediënten goed met ijs.\n5. Zeef de inhoud in een martiniglas en serveer met een schijfje passievrucht aan de zijkant.";
        case 'Whiskey Sour':
            return "1. In een shaker, combineer 60 ml bourbon whiskey.\n2. Voeg 30 ml vers citroensap toe.\n3. Voeg 15 ml eenvoudige siroop (suikerwater) toe.\n4. Schud de ingrediënten goed met ijs.\n5. Zeef de inhoud in een whiskyglas met ijs.";
        case 'Bacardi Lemon Cola':
            return "1. Vul een glas met ijsblokjes.\n2. Voeg 50 ml Bacardi Limón toe.\n3. Giet 150 ml cola over de Bacardi Limón.\n4. Roer voorzichtig.\n5. Garneer met een schijfje citroen.";
        case 'Bessen Jus':
            return "1. Vul een glas met 60 ml bessensap.\n2. Voeg 30 ml sinaasappelsap toe.\n3. Giet voorzichtig 30 ml ananassap erbij.\n4. Roer de sappen goed door elkaar.\n5. Garneer met een paar verse bessen.";
        case 'Gin Tonic':
            return "1. Vul een glas met ijsblokjes.\n2. Voeg 50 ml gin toe aan het glas.\n3. Giet 150 ml tonic water over de gin.\n4. Roer voorzichtig.\n5. Garneer met een schijfje citroen of limoen.";
        default:
            return "Geen instructies beschikbaar voor deze cocktail.";
    }
}