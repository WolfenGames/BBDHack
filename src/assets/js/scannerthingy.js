function CameraStuff() {
    video = $('#video');
    console.log("video???");
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
            try {
                video.srcObject = stream;
            } catch (error) {
                video.src = window.URL.createObjectURL(stream);
            }
            video.play();
        });
    }
}

CameraStuff();