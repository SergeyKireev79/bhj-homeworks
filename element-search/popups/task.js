const windowFirst = document.getElementById("modal_main");
windowFirst.classList.add("modal_active");

(() => {
    const windowFirst = document.getElementsByClassName("modal__close");
    for (var i = 0; i < windowFirst.length; i++) {
        windowFirst[i].addEventListener("click", function() {
            this.parentElement.parentElement.classList.remove("modal_active");
        });
    }
})();

(() => {
    const windowFirst = document.getElementsByClassName("show-success");
    for (var i = 0; i < windowFirst.length; i++) {
        windowFirst[i].addEventListener("click", function() {
            const windowSecond = document.getElementById("modal_success");
            windowSecond.classList.add("modal_active");
        });
    }
})();