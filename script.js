function openNav() {
    document.getElementById("rightSidenav").style.width = "300px";
    var btn = document.getElementById("navbtn");
    btn.style.opacity = 0;
    btn.style.visibility = "hidden";
}
function closeNav() {
    document.getElementById("rightSidenav").style.width = "0";
    var btn = document.getElementById("navbtn");
    btn.style.opacity = 1;
    btn.style.visibility = "visible";
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