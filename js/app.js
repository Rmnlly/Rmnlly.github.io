window.addEventListener("DOMContentLoaded", function(){
    let muralVideo = document.querySelector(".video1");


    function pause() {
        muralVideo.pause();
    }

    function play() {
        if (muralVideo.paused) {
            muralVideo.play();
        }
    }



});
