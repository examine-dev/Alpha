// Get the video element
const videoElement = document.getElementById('videoElement');// Define media constraints
const constraints = {
    video: true,
    audio: true
};// Request user media
navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
        // Attach the media stream to the video element
        videoElement.srcObject = stream;
    })
    .catch(error => {
        console.error('Error accessing media devices.', error);
    });