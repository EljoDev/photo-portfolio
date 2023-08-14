const list = document.querySelector(".list");

list.addEventListener("wheel", (evt) => {
    if (list.scrollLeft > 50) {
        evt.preventDefault();

    }
    console.log(evt);
    console.log();
    list.scrollLeft += evt.deltaY;

});