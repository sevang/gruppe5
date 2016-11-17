function iconClick() {
    history.pushState(null, null, '/');
    document.getElementById("title").innerHTML = "Willkommen zurück!";
    document.getElementById("startseite").style.visibility = "visible";
    document.getElementById("changename").style.visibility = "hidden";
    document.getElementById("changepic").style.visibility = "hidden";
    document.getElementById("plus").style.visibility = "visible";
}