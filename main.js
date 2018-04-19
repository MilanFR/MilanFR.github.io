function dropMenu() {
	var menu = document.getElementById("drop_menu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}