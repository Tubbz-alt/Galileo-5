

var startDate = new Date();
var startTime = startDate.getTime();

// THIS FUNCTION CALCULATES THE SECONDS ELAPSED SINCE THE PAGE WAS LOADED
function seconds_elapsed() {
    var date_now = new Date();
    var time_now = date_now.getTime();
    var time_diff = time_now - startTime;
    var seconds_elapsed = Math.floor(time_diff / 1000);

    return (seconds_elapsed);
}

function setDate() {
    var d = new Date();
    document.getElementById("currentDate").innerHTML = d;

    time_spent();
    getUrlVars();

    var params = getUrlVars();
    setDetails(params);
}

// THIS FUNCTION TAKES THE SECONDS ELAPSED AND CONVERTS THEM FOR OUTPUT
function time_spent() {

    // TAKE THE SECONDS ELAPSED
    var secs = seconds_elapsed();

    // CONVERT SECONDS TO MINUTES AND SECONDS
    var mins = Math.floor(secs / 60);
    secs -= mins * 60;

    // CONVERT MINUTES TO HOURS AND MINUTES
    var hour = Math.floor(mins / 60);
    mins -= hour * 60;

    // DISPLAY THE FINAL OUTPUT TIME STRING
    document.getElementById("timeElapsed").value = pad(hour) + ":" + pad(mins) + ":" + pad(secs);

    // RECURSIVELY RE-RUN THE FUNCTION EVERY SECOND
    setTimeout("time_spent()", 1000);
}

// THIS FUNCTION INSERTS A LEADING ZERO (IF NECESSARY) TO PROVIDE UNIFORM OUTPUT
function pad(num) {
    return ((num > 9) ? num : "0" + num);
}

function getUrlVars() {
    // var vars = {};
    // var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    //     vars[key] = value;
    // });
    var regex = /[?&]([^=#]+)=([^&#]*)/g,
        url = window.location.href,
        params = {},
        match;
    while (match = regex.exec(url)) {
        params[match[1]] = match[2];
    }
    // alert(JSON.stringify(params))
    return params;
}

function setDetails(params) {

    var dr = params["dr-name"];
    var man = params["optradio"];

    if (dr === "1")
    {
        document.getElementById("aname").innerText="Dr. Who";
    } 
    else if (dr === "2")
    {
        document.getElementById("aname").innerText="Dr. Saab";
    }
    else if (dr === "3")
    {
        document.getElementById("aname").innerText="Dr. Mercedes";
    }
    else
    {
        document.getElementById("aname").innerText="Dr. Jones";
    }
    
    
    if (man === "1")
    {
        document.getElementById("cname").innerText="John Doe";
        document.getElementById("snum").innerText="1234567890-18";
        document.getElementById("stype").innerText="Complex";
    }
    else if (man === "2")
    {
        document.getElementById("cname").innerText="Button Benjamin";
        document.getElementById("snum").innerText="0987654321-18";
        document.getElementById("stype").innerText="Simple";
    }
    else //if (man === "3")
    {
        document.getElementById("cname").innerText="David Cohen";
        document.getElementById("snum").innerText="12389045678-18";
        document.getElementById("stype").innerText="Complex";
    }
    // else
    // {
    //     $("#cname").HTML="John Doe";
    //     $("#snum").HTML="1234567890-18";
    //     $("#stype").HTML="Complex";
    // }
    
}
