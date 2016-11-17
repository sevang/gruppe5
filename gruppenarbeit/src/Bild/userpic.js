function userpicClick() {
    history.pushState(null, null, '/Bild/');
    document.getElementById("title").innerHTML = "Profilbild ändern";
    document.getElementById("startseite").style.visibility = "hidden";
    document.getElementById("changename").style.visibility = "hidden";
    document.getElementById("changepic").style.visibility = "visible";
    document.getElementById("plus").style.visibility = "hidden";
}