//Beim klicken auf TripPix Logo wird die Startseite geladen
function iconClick() {
    history.pushState(null, null, '/');
    document.getElementById("title").innerHTML = "Willkommen zurück!";
    document.getElementById("startseite").innerHTML = "";
    document.getElementById("startseite").style.visibility = "visible";
    document.getElementById("changename").style.visibility = "hidden";
    document.getElementById("changepic").style.visibility = "hidden";
    document.getElementById("addReise").style.visibility = "hidden";
    document.getElementById("showReise").style.visibility = "hidden";
    document.getElementById("navlinks").style.visibility = "hidden";
    document.getElementById("navrechts").style.visibility = "hidden";

    document.getElementById("startseite").style.display = "block";
    document.getElementById("changename").style.display = "none";
    document.getElementById("changepic").style.display = "none";
    document.getElementById("addReise").style.display = "none";
    document.getElementById("showReise").style.display = "none";

    document.getElementById("plus").style.visibility = "visible";
    sessionStorage.removeItem("activeReise");
    checkReisen();
}