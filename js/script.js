function openNav() {
    document.getElementById("rightSidenav").style.width = "300px";
    var nav_open_btn = document.getElementById("nav_open_btn");
    var nav_close_btn = document.getElementById("nav_close_btn");
    nav_open_btn.style.visibility = "hidden";
    nav_close_btn.style.visibility = "visible";
}
function closeNav() {
    document.getElementById("rightSidenav").style.width = "0";
    var nav_open_btn = document.getElementById("nav_open_btn");
    var nav_close_btn = document.getElementById("nav_close_btn");
    nav_open_btn.style.visibility = "visible";
    nav_close_btn.style.visibility = "hidden";
}
function toggleList(id) {
    var elem = document.getElementById(id);
    console.log(elem)
    if (elem.style.display == "block") {
        elem.style.display = "none"
        return;
    }
    elem.style.display = "block"
}