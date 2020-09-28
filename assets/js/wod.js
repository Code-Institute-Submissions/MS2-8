

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("card-text").innerHTML = this.responseText;
    }
};

xhr.open("GET", "https://c3kb4h1rub.execute-api.eu-north-1.amazonaws.com/Prod/");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send();