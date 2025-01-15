const video = document.getElementById('video');
const canvas = document.getElementById('canvas');

if (canvas) {
  const context = canvas.getContext('2d');

  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      video.srcObject = stream;
      video.play();
    })
    .catch(err => {
      console.error('Erro ao acessar a câmera:', err);
    });

  // Define the capture function within the scope
  function capture() {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    document.dispatchEvent(new CustomEvent('imageCaptured', { detail: canvas.toDataURL() }));
  }

  // Attach the capture function to the button's onclick event
  document.getElementById('captureButton').onclick = capture; 
} else {
  console.error("Canvas element not found!");
}