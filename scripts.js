const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

navigator.mediaDevices.getUserMedia({ video: true })
  .then( stream => {
    video.srcObject = stream;
    video.play();
  })
  .catch(err => {
    console.error('Erro ao acessar a câmera:', err);
  });

function capture() {
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  // Disparar um evento para o módulo de processamento
  document.dispatchEvent(new CustomEvent('imageCaptured', { detail: canvas.toDataURL() }));
}
