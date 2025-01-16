
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById('snap');
const erroMsgElement = document.querySelector('span#errorMsg');

const constraints = {
    video: {
      with:640, height:480
    },
    audio: false
};

// Access webcan
async function init() {
  try {
    alert('Init');
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSucess(stream);

  } catch (error) {
    erroMsgElement.innerHTML = `navigator.mediaDevices.getUserMedia error: ${error.toString()}`;
  }
  
}

function handleSucess(stream){
  window.stream = stream;
  video.srcObject = stream;
}

// inicialize webcam acces function
init();

// draw image
var context = canvas.getContext('2d');
snap.addEventListener("click", function(){
  context.drawImage(video, 0, 0,  640, 480);
});   

