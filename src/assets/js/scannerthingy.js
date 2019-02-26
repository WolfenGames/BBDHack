function CameraStuff() {
    video = $('#video');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
            try {
                video.srcObject = stream;
            } catch (error) {
                video.src = window.URL.createObjectURL(stream);
            }
            video.get(0).play();
            video.get(0).onloadeddata = () => {
                console.log("Hosted");
            }
            video.get(0).onerror =(error) => {
                console.log(error);
            }
            console.log(video);
        });
    }
}

$(document).ready(() => {
    CameraStuff();
})