//Profilbild wird geladen
function loadUserpic() {
    var c = document.getElementById("userpic");
    var context = c.getContext("2d");
    var img = new Image();
    img.onload = function () {
        context.drawImage(img, 0, 0, c.width, c.height);
    }
    if (localStorage.getItem("userpic") == "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEYklEQVR4Xu3UAQkAAAwCwdm/9HI83BLIOdw5AgQIRAQWySkmAQIEzmB5AgIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB1YxAJfjJb2jAAAAAElFTkSuQmCC" || localStorage.getItem("userpic") == null)
        img.src = "grafiken/nouserpic.png"; //Standard-Profilbild wird angezeigt

    else if (localStorage.getItem("userpic") != null) {
        img.src = localStorage.getItem("userpic"); //neues Profilbild wird angezeigt
    }
}

//Beim Klick auf das Profilbild
function userpicClick() {
    history.pushState(null, null, '/Bild/');
    document.getElementById("title").innerHTML = "Profilbild ändern";
    document.getElementById("startseite").innerHTML = "";
    document.getElementById("startseite").style.visibility = "hidden";
    document.getElementById("changename").style.visibility = "hidden";
    document.getElementById("changepic").style.visibility = "visible"; //Seite zum Profilbild ändern wird angezeigt
    document.getElementById("plus").style.visibility = "hidden";
    document.getElementById("addReise").style.visibility = "hidden";
    document.getElementById("showReise").style.visibility = "hidden";
    document.getElementById("navlinks").style.visibility = "hidden";
    document.getElementById("navrechts").style.visibility = "hidden";

    document.getElementById("startseite").style.display = "none";
    document.getElementById("changename").style.display = "none";
    document.getElementById("showReise").style.display = "none";
    document.getElementById("addReise").style.display = "none";
    document.getElementById("changepic").style.display = "block";

    sessionStorage.removeItem("activeReise");
}

//Neues Profilbild speichern
function saveNewPic() {
    var imgAsDataURL1 = document.getElementById("userpicCanvas").toDataURL("image/png");
    localStorage.setItem("userpic", imgAsDataURL1);
    document.getElementById("userpic").getContext("2d").clearRect(0, 0, 500, 500);
    loadUserpic();
    iconClick();
}

var MAX_HEIGHT = 100;

//Bild wird komprimiert auf 100px
function render(src) {
    var image = new Image();
    image.onload = function () {
        var canvas = document.getElementById("userpicCanvas");
        if (image.height > MAX_HEIGHT) {
            image.width *= MAX_HEIGHT / image.height;
            image.height = MAX_HEIGHT;
        }
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0, image.width, image.height);
    };
    image.src = src;
}

//gedroppte Datei wird ausgelesen
function loadImage(src) {

    if (!src.type.match(/image.*/)) {
        console.log("The dropped file is not an image: ", src.type);
        return;
    }


    var reader = new FileReader();
    reader.onload = function (e) {
        render(e.target.result);
    };
    reader.readAsDataURL(src);
}

//Aus userpicDropzone wird eine Dropzone für Drag & Drop; Drag & Drop Events werden eingefügt
var target = document.getElementById("userpicDropzone");
target.addEventListener("dragover", function (e) {
    e.preventDefault();
}, true);
target.addEventListener("drop", function (e) {
    e.preventDefault();
    loadImage(e.dataTransfer.files[0]);
}, true);