var v = document.getElementById('videoid');
v.addEventListener(
    'play', 
    function() { 
        v.play();
    }, 
    false);

v.onclick = function() {
    if (v.paused) {
        v.play();
    } else {
        v.pause();
    }

    return false;
};