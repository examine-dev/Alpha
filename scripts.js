
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const canvasVideo = document.getElementById('canvasVideo');
const snap = document.getElementById('snap');
const erroMsgElement = document.querySelector('span#errorMsg');

// Set canvas size to match video size
canvasVideo.width = video.clientWidth;
canvasVideo.height = video.clientHeight;

var contextVideo = canvasVideo.getContext('2d',  { willReadFrequently: true });
// Example function to draw a rectangle on the video
function drawRectangle() {
  contextVideo.clearRect(0, 0, canvasVideo.width, canvasVideo.height); // Clear previous drawings
  contextVideo.strokeStyle = 'red';
  contextVideo.lineWidth = 3;
  contextVideo.strokeRect(50, 50, 200, 150); // Draw a rectangle at (50, 50) with width 200 and height 150
}

const constraints = {
    video: {
      with:640, height:480
    },
    audio: false
};

// Access webcan
async function init() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSucess(stream);
    drawRectangle(); // Call the drawing function when video is playing

  } catch (error) {
    erroMsgElement.innerHTML = `navigator.mediaDevices.getUserMedia error: ${error.toString()}`;
  }
  
}

function handleSucess(stream){
  window.stream = stream;
  video.srcObject = stream;
  video.addEventListener('play', () => {
    setInterval(drawRectangle, 100); // Redraw periodically (adjust time interval as needed)
  });
}



// inicialize webcam acces function
init();

// draw image
var context = canvas.getContext('2d',  { willReadFrequently: true });
snap.addEventListener("click", function(){
  context.drawImage(video, 0, 0,  640, 480);
  var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const d = new Date();
  let time1 = d.getTime();
  console.log(time1)
  handlePixel(imageData);

});     

