// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const speechSynthesis = window.speechSynthesis;
  var voices;
  
  

      
    speechSynthesis.addEventListener('voiceschanged', () => {
      
      voices = speechSynthesis.getVoices();
      if (typeof speechSynthesis === 'undefined') {
        return;
      }
      
      

      console.log(voices);

      for (let i = 0; i < voices.length; i++) {
        const option = document.createElement('option');
        option.textContent = `${voices[i].name} (${voices[i].lang})`;

        if (voices[i].default) {
          option.textContent += ' — DEFAULT';
        }

        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        document.getElementById("voice-select").appendChild(option);


    }
  });

const button = document.querySelector("#explore").children[4];
    
    button.addEventListener('click', (event) => {
      const textarea = document.querySelector('#explore').querySelector("#text-to-speak");
    const utterThis = new SpeechSynthesisUtterance(textarea.value);
      const voiceSelect = document.getElementById("voice-select");

      const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    
      
    
    console.log(textarea);
    console.log(button);
    console.log(utterThis);
    speechSynthesis.speak(utterThis);
    

  });

  setInterval(imageCheck, 500);

  
}

function imageCheck (){
  const speechSynthesis = window.speechSynthesis;
  const image = document.images[0];
  if(speechSynthesis.speaking){
    image.src = "assets/images/smiling-open.png"
  }
  else{
    image.src = "assets/images/smiling.png"
  }
}
