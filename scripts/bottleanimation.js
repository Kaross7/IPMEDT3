let BottleList = null;
let SpilledOnce = false;
let liquorColor = "";
let _pouringPosition = false;

// Start bottle animation
const TiltBottle = (event) => {

    BottleTiltAnimation("0.273, 1.484, 10.223","0, -90, 0")

    setTimeout(() => {
      BottleTiltAnimation("0.273, 1.119, 10.223", "-90, -90, 0");
    }, 5000);

}


const SetSelectedBottle = (event) => {
    SpilledOnce = false;

    const bottleColor = event.target.getAttribute("material");

    SelectedBottle = document.getElementsByClassName("SelectedBottle");
    SelectedBottle[0].setAttribute("color", bottleColor.color);
}

const ResetLiquid = (event) => {
    liquorColor = "";
    
    liquidObject = document.getElementById("StandartGlassLiquid");
    liquidObject.setAttribute("scale", "0 0 0");
  };


const LiquidPoured = (bottle) => {
    
    if (SpilledOnce == false){
    SpilledOnce = true;
    ChangeLiquidColor(bottle)
    }

};

const ChangeLiquidColor = (bottle) => {
    const bottleColor = bottle[0].getAttribute("material");

    if (liquorColor != ""){

        combineColors(bottleColor.color);
    }
    else{
        liquorColor = bottleColor.color;
    }

    document.getElementById("StandartGlassLiquid").setAttribute("color", liquorColor);
}; 

const combineColors = (hexClickedColor) => {
    const color1 = new THREE.Color(liquorColor);
    const color2 = new THREE.Color(hexClickedColor);
  
    const combinedColor = new THREE.Color(
      (color1.r + color2.r) / 2,
      (color1.g + color2.g) / 2,
      (color1.b + color2.b) / 2
    );
  
    liquorColor = "#" + combinedColor.getHexString();
};



const BottleTiltAnimation = (position, rotation) => {
    var SelectedBottle = document.getElementsByClassName('SelectedBottle');

    if (SelectedBottle[0].getAttribute('animation__reposition')) {
        SelectedBottle[0].removeAttribute('animation__reposition');
    }

    if (SelectedBottle[0].getAttribute('animation__rotate')){
      SelectedBottle[0].removeAttribute('animation__rotate')
    }
    
      SelectedBottle[0].setAttribute('animation__reposition', {
        property: 'position',
        dur: 3000,
        to: position,
        loop: false
      });

      SelectedBottle[0].setAttribute('animation__rotate', {
        property: 'rotation',
        dur: 3000,
        to: rotation,
        loop: false
      });
}




AFRAME.registerComponent('bottle-updater', {
    init: function () {
      // Start the interval with a delay of 1000 milliseconds (1 second)
      setInterval(this.runEveryOtherSecond.bind(this), 0);
    },
  
    runEveryOtherSecond: function () {
      // Your method logic here, to be executed every other second
      const bottle = document.getElementsByClassName("SelectedBottle");
      const bottleRotation = bottle[0].getAttribute("rotation");
  
      if (bottleRotation.x >= 0) {
        LiquidPoured(bottle);
        const liquidObject = document.getElementById("StandartGlassLiquid");
        liquidObject.setAttribute("position", "-0.094 1.218 10.223");
        liquidObject.setAttribute("scale", "0.040 0.010 0.040");
      }
    }
  });
  



const Init = () => {

    SelectedBottle = document.getElementsByClassName("SelectedBottle");
    SelectedBottle[0].addEventListener("click", TiltBottle);

    ShowBottleList = document.getElementsByClassName("js--ShowBottle");
    for (let i = 0; i < ShowBottleList.length; i++) {
      const ShowBottle = ShowBottleList[i];
      ShowBottle.addEventListener("click", SetSelectedBottle);
    }

    GlassList = document.getElementsByClassName("js--Glass");
    for (let i = 0; i < GlassList.length; i++) {
      const Glass = GlassList[i];
      Glass.addEventListener("click", ResetLiquid);
    }
  
}

  window.addEventListener("load", Init)