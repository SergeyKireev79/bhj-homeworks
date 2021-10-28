const cookie = document.getElementById("cookie");
let clickerCounter = document.getElementById("clicker__counter");

function clicks() {

    clickerCounter.textContent++;
    if (cookie.width === 200) {
        cookie.width = 100
    } else {
        cookie.width = 200
    };


};

cookie.onclick = clicks;