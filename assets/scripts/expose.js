// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var expose = document.querySelector("#expose");
  var jsConfetti = new JSConfetti({ expose });

  //document.images[0].src = "assets/images/air-horn.svg"
  imageAudio();
  playAudio(jsConfetti);
  volume();
  

}



function imageAudio() {
    const selectElement = document.querySelector('#horn-select');
    const audio = document.querySelector(".hidden")

  selectElement.addEventListener('change', (event) => {
    if(event.target.value == "select"){
      document.images[0].src = "assets/images/no-image.png";
      audio.src = ""
    }

    else if(event.target.value == "air-horn"){
      document.images[0].src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3"
    }

    else if(event.target.value == "car-horn"){
      document.images[0].src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3"
    }

    else if(event.target.value == "party-horn"){
      document.images[0].src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3"
    }

  });
}

function playAudio(jsConfetti) {
    const button = document.querySelector("#expose").children[4];
    const selectElement = document.querySelector('#horn-select');

    button.addEventListener('click', (event) => {
      const audio = document.querySelector(".hidden");
      audio.load();
      audio.play();
      console.log(selectElement.value);
      if(selectElement.value == "party-horn"){
        confetti(jsConfetti);
      }
    });
}

function volume(){
  const vol = document.getElementById("volume");
  const audio = document.querySelector(".hidden");
  const volImage = document.images[1];

  vol.addEventListener('input', (event)=> {
    var ogVal = document.getElementById("volume").value;
    var value = document.getElementById("volume").value/100;
    audio.volume = value;

    if(ogVal == 0){
      volImage.src = "assets/icons/volume-level-0.svg";
    }
    else if(ogVal < 33 ){
      volImage.src = "assets/icons/volume-level-1.svg";
    }
    else if(ogVal < 67){
      volImage.src = "assets/icons/volume-level-2.svg";
    }
    else{
      volImage.src = "assets/icons/volume-level-3.svg";
    }
  });

}

function confetti(jsConfetti){
  jsConfetti.addConfetti({
   emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
});
}






