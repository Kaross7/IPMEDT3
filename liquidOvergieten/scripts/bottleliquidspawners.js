const _bottleKinds = ["kind1"];
let _bottleList;
let _spawnedBottleLiquidSpawners = [];
let _spawnedPouredLiquid = [];


const GetAllBottles = () => {
    
  _bottleList = document.getElementsByClassName("js--bottle");
  for (let i = 0; i < _bottleList.length; i++) {
    
    const splitBottleID = _bottleList[i].getAttribute("id").split('-');

    if (!document.getElementById("liquidSpawn" + splitBottleID[1])){
    SpawnNewBottleLiquidSpawner(_bottleList[i], splitBottleID[1]);
    }

  }

}


const SpawnNewBottleLiquidSpawner = (bottle, bottleNumber) => {

  const bottlePosition = bottle.getAttribute("position");

  var newLiquidSpawner = document.createElement('a-box');
  newLiquidSpawner.setAttribute("id", "liquidSpawn-" + bottleNumber);

  // Calculate the new position by adding parent's position to the desired offset
  const newPosition = {
    x: bottlePosition.x,
    y: bottlePosition.y,
    z: bottlePosition.z + 31

  };

  newLiquidSpawner.setAttribute('position', newPosition);
  bottle.appendChild(newLiquidSpawner);
  _spawnedBottleLiquidSpawners.push(newLiquidSpawner);
}


const SpawnPouredLiquid = (bottleLiquidSpawner) => {

  var newPouredLiquid = document.createElement('a-box');
  newPouredLiquid.setAttribute("position", "0, 1, 0");
  newPouredLiquid.setAttribute("scale", "1 1 1");
  newPouredLiquid.setAttribute("class", "pouredliquid");
  newPouredLiquid.setAttribute("pourrate", "1");
  newPouredLiquid.setAttribute("color", "#0000ff");

  bottleLiquidSpawner.appendChild(newPouredLiquid);
  _spawnedPouredLiquid.push(newPouredLiquid);

  console.log(newPouredLiquid.getAttribute("position"));

}


const UpdatePositionPouredLiquid = (spawnedPouredLiquid) => {

  const spawnedPouredLiquidPosition = spawnedPouredLiquid.getAttribute("position");

    const spawnedPouredLiquidPourRate = spawnedPouredLiquid.getAttribute("pourrate");

    const pourrate = 0.01 * spawnedPouredLiquidPourRate;
;
    const positionY = spawnedPouredLiquidPosition.y - pourrate;;
  
    spawnedPouredLiquid.setAttribute("position", spawnedPouredLiquidPosition.x + " " + positionY + " " + spawnedPouredLiquidPosition.z);

}



AFRAME.registerComponent('spawnedbottleliquidspawners', {
  tick: function () {
      for (let i = 0; i < _bottleList.length; i++){

        const splitBottleID = _bottleList[i].getAttribute("id").split('-');
        const splitliquidspawnerID = _spawnedBottleLiquidSpawners[i].getAttribute("id").split('-');
        if (splitBottleID[1] === splitliquidspawnerID[1]){
          
          const bottleRotation = _bottleList[i].getAttribute("rotation");
          if (bottleRotation.x === 0 || bottleRotation.x % 180 === 0 || bottleRotation.x % -180 === 0){

            SpawnPouredLiquid(_spawnedBottleLiquidSpawners[i]);

          }

        }
        else{
          console.error("MISMATCH: _bottleList and _spawnedBottleLiquidSpawners")
          return;
        }

      }
  }
});

AFRAME.registerComponent('spawnedpouredliquid', {
  tick: function () {
      for (let i = 0; i < _spawnedPouredLiquid.length; i++){

        //UpdatePositionPouredLiquid(_spawnedPouredLiquid[i])

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

/*
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
*/