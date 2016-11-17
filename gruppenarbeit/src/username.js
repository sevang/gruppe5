function loadUsername() {
    if (localStorage.getItem("username") != null) {
        document.getElementById("username").innerHTML = localStorage.getItem("username");
    } else {
        usernameClick();
        document.getElementById("title").innerHTML = "Willkommen! Bitte Username festlegen";
    }
}

function usernameClick() {
    history.pushState(null, null, '/Name/');
    document.getElementById("title").innerHTML = "Username ändern";
    document.getElementById("startseite").innerHTML = "";
    document.getElementById("startseite").style.visibility = "hidden";
    document.getElementById("changepic").style.visibility = "hidden";
    document.getElementById("plus").style.visibility = "hidden";
    document.getElementById("addReise").style.visibility = "hidden";
    document.getElementById("showReise").style.visibility = "hidden";
    document.getElementById("navlinks").style.visibility = "hidden";
    document.getElementById("navrechts").style.visibility = "hidden";
    document.getElementById("changename").style.visibility = "visible";

    document.getElementById("startseite").style.display = "none";
    document.getElementById("changepic").style.display = "none";
    document.getElementById("showReise").style.display = "none";
    document.getElementById("addReise").style.display = "none";
    document.getElementById("changename").style.display = "block";

    sessionStorage.removeItem("activeReise");
}

function saveNewname() {
    var newname = document.getElementById("newname").value;
    var oldname = localStorage.getItem("username");
    if (newname != oldname && newname != "") {
        localStorage.setItem("username", newname);
        loadUsername();
        iconClick();
    }
}