
function show_support() {
    var contact = document.getElementById("contact");
    var header = document.getElementById("mainPage");
    var about = document.getElementById("about");

    if (contact.classList.contains('d-none'))
        contact.classList.remove('d-none');
    if (!header.classList.contains('d-none'))
        header.classList.add('d-none');
    if (!about.classList.contains('d-none'))
        about.classList.add('d-none');
}

function show_about() {
    var about = document.getElementById("about");
    var header = document.getElementById("mainPage");
    var contact = document.getElementById("contact");

    if (!contact.classList.contains('d-none'))
        contact.classList.add('d-none');
    if (!header.classList.contains('d-none'))
        header.classList.add('d-none');
    if (about.classList.contains('d-none'))
        about.classList.remove('d-none');
}

function show_header() {
    var about = document.getElementById("about");
    var header = document.getElementById("mainPage");
    var contact = document.getElementById("contact");

    if (!contact.classList.contains('d-none'))
        contact.classList.add('d-none');
    if (header.classList.contains('d-none'))
        header.classList.remove('d-none');
    if (!about.classList.contains('d-none'))
        about.classList.add('d-none');
}


function addLineToTable() {

    var table = document.getElementById("myTable");
    var tBodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

    var text1 = document.createTextNode((tBodyRef.childElementCount + 1).toString());
    var text2 = document.createTextNode(document.getElementById('drugName').value);
    var text3 = document.createTextNode(document.getElementById('quantity').value);
    var text4 = document.createTextNode(document.getElementById('timeElapsed').value);

    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    td1.classList.add("table-td-style");
    td2.classList.add("table-td-style");
    td3.classList.add("table-td-style");
    td4.classList.add("table-td-style");

    tr.innerHTML = td1.outerHTML + td2.outerHTML + td3.outerHTML + td4.outerHTML;

    tBodyRef.innerHTML += tr.outerHTML;
}

this.smiley = 1;

function toggle_smiley() {
    var img1 = "img/green-smiley1.png";
    var img2 = "img/red-smiley1.png"

    if (this.smiley === 0)
        return;

    var smiley_elem = document.getElementById("smiley-img");
    var smiley_text = document.getElementById("smiley-text");

    if (this.smiley % 2 != 0) {
        smiley_elem.src = img2;
        smiley_text.innerText ="UnSterilized";
    }
    else {
        smiley_elem.src = img1;
        smiley_text.innerText ="Sterilized";
    }

    this.smiley++;
}

function smiley_red() {
    var img2 = "img/red-smiley1.png"

    var smiley_elem = document.getElementById("smiley-img");
    var smiley_text = document.getElementById("smiley-text");

        smiley_elem.src = img2;
        smiley_text.innerText ="UnSterilized";

    this.smiley = 0;;
}
