var noPic = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEYklEQVR4Xu3UAQkAAAwCwdm/9HI83BLIOdw5AgQIRAQWySkmAQIEzmB5AgIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB1YxAJfjJb2jAAAAAElFTkSuQmCC"; //leeres base64 Bild, welches bei leerem Canvas entsteht


//Reise hinzufügen
function addReise() {
    history.pushState(null, null, '/Add/');
    document.getElementById("title").innerHTML = "Reise hinzufügen";
    document.getElementById("startseite").innerHTML = "";
    //restliche Seiten unsichtbar machen, nur diese Seite anzeigen lassen
    document.getElementById("startseite").style.visibility = "hidden";
    document.getElementById("changename").style.visibility = "hidden";
    document.getElementById("changepic").style.visibility = "hidden";
    document.getElementById("showReise").style.visibility = "hidden";
    document.getElementById("plus").style.visibility = "hidden";
    document.getElementById("navlinks").style.visibility = "hidden";
    document.getElementById("navrechts").style.visibility = "hidden";
    document.getElementById("addReise").style.visibility = "visible";
    document.getElementById("startseite").style.display = "none";
    document.getElementById("changename").style.display = "none";
    document.getElementById("changepic").style.display = "none";
    document.getElementById("showReise").style.display = "none";
    document.getElementById("addReise").style.display = "block";

    sessionStorage.removeItem("activeReise"); //Löscht Variable, sodass klar wird, dass keine Reise offen ist
}

//Überprüft, ob Reisen vorhanden sind
function checkReisen() {
    if (localStorage.getItem("reisen") == null || localStorage.getItem("reisen") == "0") { //falls keine Reisen im LocalStorage
        document.getElementById("startseite").innerHTML = "<h3>Du hast noch keine Reisen gespeichert :-(<br>Füge jetzt welche hinzu!</h3>"; //dann wird ein schöner Text eingeblendet, man solle doch bitte Reisen hinzufügen
        localStorage.setItem("reisen", "0"); //im LocalStorage festlegen, dass es 0 Reisen gibt
    }
    showReisen(); //Damit, falls Reisen vorhanden, diese angezeigt werden
}

//Reise speichern
function saveReise() {
    if (document.getElementById("newReisename").value == "") //falls Reisename leer ist (Pflichtfeld)
        window.alert("Reisename muss angegeben werden"); //MsgBox vom Browser
    else {
        var attr1 = document.getElementById("newReisename").value; //Werte der Inputfelder werden gelesen
        var attr2 = document.getElementById("newReiseort").value;
        var attr3 = convertDatum(document.getElementById("newReisebeginn").value);
        var attr4 = convertDatum(document.getElementById("newReiseende").value);
        var newReise = attr1 + "|" + attr2 + "|" + attr3 + "|" + attr4; //Ausgelesene Werte werden zu einem String zusammengefasst
        localStorage.setItem("reisen", parseInt(localStorage.getItem("reisen")) + 1); //Anzahl der Reisen wird um 1 erhöht
        localStorage.setItem("reise" + localStorage.getItem("reisen"), newReise); //Als neue Reise (z.B. "reise1") gespeichert

        var imgAsDataURL1 = document.getElementById("reisecanvas").toDataURL("image/png"); //Bild aus dem Canvas umwandeln
        localStorage.setItem("reise" + localStorage.getItem("reisen") + "pic", imgAsDataURL1); //Bild zur Reise speichern
        clearNewReise();
        iconClick();
    }
}

//Inputfelder leeren
function clearNewReise() {
    document.getElementById("newReisename").value = "";
    document.getElementById("newReiseort").value = "";
    document.getElementById("newReisebeginn").value = "";
    document.getElementById("newReiseende").value = "";
}

//Datum aus dem Date-Input in gängiges deutsches Format umwandeln (ansonsten wäre das Format JAHR-MONAT-TAG)
function convertDatum(oldDatum) {
    var gesplittetesDatum = oldDatum.split("-"); //das Datum aufteilen (durch Trennsymbol "-")
    var newDatum = gesplittetesDatum[2] + "." + gesplittetesDatum[1] + "." + gesplittetesDatum[0]; //neues Format TAG.MONAT.JAHR
    if (gesplittetesDatum[2] != undefined && gesplittetesDatum[1] != undefined) //wenn die Werte nicht undefined sind
        return newDatum; //neues Datumformat wird zurückgegeben
    else
        return ""; //ansonsten eben nicht
}

//Reisen anzeigen
function showReisen() {
    for (var i = 1; i <= parseInt(localStorage.getItem("reisen")); i++) { //wird so oft wie ANzahl der Reisen ausgeführt
        var fullreise = localStorage.getItem("reise" + i).split("|"); //Reise aus LocalStorage wird aufgeteilt in einzelne Daten
        var reisename = fullreise[0];
        var reiseort = fullreise[1];
        var reisebeginn = fullreise[2];
        var reiseende = fullreise[3];

        var current = document.getElementById("startseite").innerHTML; //Dort wo es angezeigt werden soll

        if (reiseort != "") //falls Reiseort angegeben
            var ortdiv = `<div class="infozeile" id="reiseort${i}">Ort: ${reiseort}</div>`; //Reiseort der angezeigt werden soll
        else
            var ortdiv = ""; //falls kein Reiseort angegeben ist dann leer

        if (reisebeginn != "" && reiseende != "") //siehe oben
            var zeitdiv = `<div class="infozeile" id="reisezeit${i}">${reisebeginn} - ${reiseende}</div>`;
        else
            var zeitdiv = "";

        document.getElementById("startseite").innerHTML = current + `
<div class="reise" id="reise${i}" onclick="reiseClick(${i})" title="Reise ansehen">
    <div class="reiseinfo">
        <div class="infozeile" id="reisename${i}">${reisename}</div>
        ${ortdiv}
        ${zeitdiv}
    </div>
    <img class="del" id="delReise${i}" title="Reise löschen" src="grafiken/del.png" width="19px" onclick="del(${i})">
</div>`; //die alte Seite wird übernommen und es wird eine weitere Reise hinzugefügt, die dann angezeigt wird
        if (localStorage.getItem("reise" + i + "pic") == noPic || localStorage.getItem("reise" + i + "pic") == null) //falls kein Reisebild vorhanden
            document.getElementById("reise" + i).style.backgroundImage = "url(grafiken/noreisepic.png)"; //dann Standardbild anzeigen
        else if (localStorage.getItem("reise" + i + "pic") != null)
            document.getElementById("reise" + i).style.backgroundImage = "url(" + localStorage.getItem("reise" + i + "pic") + ")"; //ansonsten Bild zur Reise aus LocalStorage lesen und anzeigen
    }
}

//Reise löschen
function del(reiseId) {
    var oldReisenAnzahl = parseInt(localStorage.getItem("reisen"));
    localStorage.removeItem("reise" + reiseId); //löschen aus LocalStorage
    localStorage.removeItem("reise" + reiseId + "pic");
    localStorage.setItem("reisen", oldReisenAnzahl - 1); //Zahl der Reisen wird um 1 verringert

    for (var i = reiseId; i < oldReisenAnzahl; i++) { //für alle Reisen, die nach der gelöschen Reise kommen
        localStorage.setItem("reise" + i, localStorage.getItem("reise" + (i + 1))); //Reise wird als Reise mit 1 Nummer kleiner neu gespeichert (z.B. "reise5" wird zu "reise4")
        localStorage.setItem("reise" + i + "pic", localStorage.getItem("reise" + (i + 1) + "pic")); //Ebenso für das Bild
        localStorage.removeItem("reise" + (i + 1)); //alte Reise, die neu gespeichert wurde, wird gelöscht
        localStorage.removeItem("reise" + (i + 1) + "pic"); //Ebenso für das Bild
    }

    sessionStorage.setItem("deleted", "1");
    document.getElementById("startseite").innerHTML = "";
    checkReisen();
}

var reiseNummer;

//Reise anzeigen
function reiseClick(reiseNr) {
    if (sessionStorage.getItem("deleted") == "1") {
        sessionStorage.removeItem("deleted");
        document.getElementById("startseite").innerHTML = "";
        checkReisen();
    } else {
        var fullreise = localStorage.getItem("reise" + reiseNr).split("|");
        var reisename = fullreise[0];
        var reiseort = fullreise[1];
        var reisebeginn = fullreise[2];
        var reiseende = fullreise[3];
        reiseNummer = reiseNr;

        history.pushState(null, null, '/Reise/');
        document.getElementById("title").innerHTML = reisename;
        document.getElementById("startseite").innerHTML = "";
        document.getElementById("startseite").style.visibility = "hidden";
        document.getElementById("changename").style.visibility = "hidden";
        document.getElementById("changepic").style.visibility = "hidden";
        document.getElementById("plus").style.visibility = "hidden";
        document.getElementById("addReise").style.visibility = "hidden";
        document.getElementById("showReise").style.visibility = "visible";
        document.getElementById("navlinks").style.visibility = "visible";
        document.getElementById("navrechts").style.visibility = "visible";

        document.getElementById("startseite").style.display = "none";
        document.getElementById("changepic").style.display = "none";
        document.getElementById("addReise").style.display = "none";
        document.getElementById("changename").style.display = "none";
        document.getElementById("showReise").style.display = "block";

        if (localStorage.getItem("reise" + reiseNr + "pic") == null || localStorage.getItem("reise" + reiseNr + "pic") == noPic)
            document.getElementById("reiseimg").src = "grafiken/noreisepic.png"; //falls kein Bild vorhanden dann Standardbild
        else
            document.getElementById("reiseimg").src = localStorage.getItem("reise" + reiseNr + "pic"); //ansonsten Bild aus LocalStorage

        if (reiseort != "" && reisebeginn != "" && reiseende != "") //Wenn Reiseort und Reisezeit angegeben
            document.getElementById("reiseinfos").innerHTML = `Ort: ${reiseort}<br>${reisebeginn} - ${reiseende}`;
        else if (reiseort != "" && reisebeginn == "") //Wenn Reiseort aber nicht Reisezeit angegeben
            document.getElementById("reiseinfos").innerHTML = `Ort: ${reiseort}`;
        else if (reiseort == "" && reisebeginn != "" && reiseende != "") //Wenn Reisezeit aber nicht Reiseort angegeben
            document.getElementById("reiseinfos").innerHTML = `${reisebeginn} - ${reiseende}`;
        else if (reiseort == "" && reisebeginn == "" && reiseende == "") //Wenn weder Reiseort noch Reisezeit angegeben
            document.getElementById("reiseinfos").innerHTML = "";

        sessionStorage.setItem("activeReise", reiseNr); //Diese Reise ist jetzt offen
    }
}

//Reise nach links
function left() {
    if (sessionStorage.getItem("activeReise") != null)
        reiseClick(parseInt(sessionStorage.getItem("activeReise")) - 1); //Vorherige Reise aufrufen
}

//Reise nach rechts
function right() {
    if (sessionStorage.getItem("activeReise") != null)
        reiseClick(parseInt(sessionStorage.getItem("activeReise")) + 1); //Nächste Reise aufrufen
}

var MAX_HEIGHT = 400;

function render1(src1) {
    var image1 = new Image();
    image1.onload = function () {
        var canvas1 = document.getElementById("reisecanvas");
        if (image1.height > MAX_HEIGHT) {
            image1.width *= MAX_HEIGHT / image1.height;
            image1.height = MAX_HEIGHT;
        }
        var ctx1 = canvas1.getContext("2d");
        ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
        canvas1.width = image1.width;
        canvas1.height = image1.height;
        ctx1.drawImage(image1, 0, 0, image1.width, image1.height);
    };
    image1.src = src1;

    /*-----------------------------BLOB-------------------------------
    var canvass = document.getElementById("reisecanvas");

    var dataURL = canvass.toDataURL("image/png");
    var data = atob(dataURL.substring("data:image/png;base64,".length)),
        asArray = new Uint8Array(data.length);

    for (var i = 0, len = data.length; i < len; ++i) {
        asArray[i] = data.charCodeAt(i);
    }

    var blob = new Blob([asArray.buffer], {
        type: "image/png"
    });

    localStorage.setItem("reiseblob", blob);
    -------------------------------------------------------------------*/
}

function loadImage1(src1) {

    if (!src1.type.match(/image.*/)) {
        console.log("The dropped file is not an image: ", src1.type);
        return;
    }


    var reader1 = new FileReader();
    reader1.onload = function (e) {
        render1(e.target.result);
    };
    reader1.readAsDataURL(src1);
}

var target1 = document.getElementById("reise_dropzone");
target1.addEventListener("dragover", function (e) {
    e.preventDefault();
}, true);
target1.addEventListener("drop", function (e) {
    e.preventDefault();
    loadImage1(e.dataTransfer.files[0]);
}, true);