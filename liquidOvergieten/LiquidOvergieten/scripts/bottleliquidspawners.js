const _bottleKinds = ["kind1"];

const GetAllBottles = () => {
    
  bottleList = document.getElementsByClassName("js--bottle");
  for (let i = 0; i < bottleList.length; i++) {
    
    const splitBottleID = bottleList[i].getAttribute("id").split('-');

    if (!document.getElementById("liquidSpawn" + splitBottleID[1])){
    SpawnNewBottleLiquidSpawner(bottleList[i], splitBottleID[1]);
    }

  }

}

const SpawnNewBottleLiquidSpawner = (bottle, bottleNumber) => {

  var spawnedbottleLiquidSpawners = document.getElementById('spawnedbottleliquidspawners');

  var newLiquidSpawner = document.createElement('a-sphere');
  newLiquidSpawner.setAttribute("id", "liquidSpawn" + bottleNumber);
  newLiquidSpawner.setAttribute("class", "js--liquidSpawn")

  spawnedbottleLiquidSpawners.appendChild(newLiquidSpawner);

}


const IdentifyBottleKind = (bottle) => {

  const splitBottleID = bottle.getAttribute("id").split('-');

  for (let i = 0; i < _bottleKinds.length; i++){

    if (splitBottleID[0] === _bottleKinds[i]){

      GetSpawnLocation(bottle, _bottleKinds[i])
      return;

    }

  }

  console.error("Bottle Kind Not Found!")

}


AFRAME.registerComponent('spawnedbottleliquidspawners', {
  tick: function (time, timeDelta) {
    
    console.log(1);
    liquidSpawnList = document.getElementsByClassName("js--liquidSpawn");
    for (let i = 0; i < bottleList.length; i++) {

    }

  }
});


const Start = () => {

  /*Create bottle liquid spawns */
  GetAllBottles();

}

const main = () => {

  Start();
  
}

window.addEventListener("load", main)

  