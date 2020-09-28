function getWeight(gender, weight) {
  if (gender === "woman") {
    return weight.w;
  } else {
    return weight.m;
  }
}

function getRandomItem(items) {
    
}

$("#random-wod").click(function () {
  getRandomWod();
});

function getRandomWod() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let json = JSON.parse(this.responseText);
      let wod = getRandomItem(json.Items); //todo get random wod
      let gender = $("#gender").val();
      let experience = $("#experience").val();
      let type = $("#wod-type").val();
      document.getElementById("card-title").innerHTML = wod.name;
      document.getElementById("card-type").innerHTML = wod.type;
      document.getElementById("card-level").innerHTML = experience;
      document.getElementById("card-gender").innerHTML = gender;
      
      $("#card-steps").empty()
      for (i = 0; i < wod.steps.length; i++) {
        $("#card-steps").append(
          '<li class="list-group-item">' +
            wod.steps[i].repetitions +
            " " +
            wod.steps[i].name +
            " " +
            getWeight(gender, wod.steps[i].weight) +
            " " +
            wod.steps[i].unit +
            "</li>"
        );
      }
    }
  };

  xhr.open(
    "GET",
    "https://c3kb4h1rub.execute-api.eu-north-1.amazonaws.com/Prod/"
  );
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.send();
}

getRandomWod();