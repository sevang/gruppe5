function loadUsername() {
    if (localStorage.getItem("username") != null) {
        document.getElementById("username").innerHTML = localStorage.getItem("username");
    } else {
        usernameClick();
        document.getElementById("title").innerHTML = "Willkommen! Bitte Username festlegen";
        document.getElementById("nametext").innerHTML = "Username:";
    }
}

function usernameClick() {
    history.pushState(null, null, '/Name/');
    document.getElementById("title").innerHTML = "Username ändern";
    document.getElementById("startseite").style.visibility = "hidden";
    document.getElementById("changename").style.visibility = "visible";
    document.getElementById("changepic").style.visibility = "hidden";
    document.getElementById("plus").style.visibility = "hidden";
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