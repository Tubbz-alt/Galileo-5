
function show_support_hide_header()
{
   var contact = document.getElementById("contact");
   var header = document.getElementById("mainPage");

   contact.classList.toggle('d-none');
   header.classList.toggle('d-none');

}

function addLineToTable() {

    var table = document.getElementById("myTable");
    var tBodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

    var text1 = document.createTextNode((tBodyRef.childElementCount+1).toString());
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