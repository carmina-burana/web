function openNav() {
    document.getElementById("rightSidenav").style.width = "250px";
    var nav_open_btn = document.getElementById("nav_open_btn");
    var nav_close_btn = document.getElementById("nav_close_btn");
    var nav_header = document.getElementById("nav_header");
    var nav_body = document.getElementById("side_nav_item");
    
    nav_header.style.float = "right";
    nav_body.style.float = "right";
    nav_header.style.visibility = "visible";
    nav_header.style.width = "230px";
    nav_body.style.width = "80%";

    nav_open_btn.style.visibility = "hidden";
    nav_close_btn.style.visibility = "visible";
}
function closeNav() {
    document.getElementById("rightSidenav").style.width = "0";
    var nav_open_btn = document.getElementById("nav_open_btn");
    var nav_header = document.getElementById("nav_header");
    var nav_body = document.getElementById("side_nav_item");
    
    nav_header.style.float = "none";
    nav_body.style.float = "none";
    nav_header.style.visibility = "hidden";
    nav_header.style.width = "0px";
    nav_body.style.width = "0px";

    nav_open_btn.style.visibility = "visible";
    nav_close_btn.style.visibility = "hidden";
}
function toggleList(id) {
    var elem = document.getElementById(id);
    var btn = elem.previousElementSibling;
    if (elem.style.display == "block") {
        elem.style.display = "none"
        btn.classList.remove('active')
        return;
    }
    elem.style.display = "block"
    btn.classList.add('active')
}