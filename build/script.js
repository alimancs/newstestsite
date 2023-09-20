function hamMenu(condition) {
    const menu = document.querySelector("#menubox");
    if (condition==="open") {
        menu.style.marginLeft = "100px";
        // menu.style.display = "flex";
    } else if (condition ==="close") {
        menu.style.marginLeft = "700px";
        // menu.style.display = "none";
    };
};