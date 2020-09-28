function getWeight(gender, weight) {
  if (gender === "woman") {
    return weight.w;
  } else {
    return weight.m;
  }
}

function getRandomItem(items) {
  let index = Math.floor(Math.random() * items.length);
  return items[index];
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
      let gender = $("input:radio[name ='gender']:checked").val();
      let experience = $("#experience").val();
      let type = $("#wod-type").val();
      document.getElementById("card-title").innerHTML = wod.name;
      document.getElementById("card-type").innerHTML = wod.type;
      document.getElementById("card-level").innerHTML = experience;

      $("#card-steps").empty();
      for (i = 0; i < wod.steps.length; i++) {
        let weight = getWeight(gender, wod.steps[i].weight);
        
        let listItem =
          '<li class="list-group-item">' +
          wod.steps[i].repetitions +
          " x " +
          wod.steps[i].name;
        if (weight > 0) {
          listItem += " " + weight +
          " " + wod.steps[i].unit;
        }
        listItem += "</li>";

        $("#card-steps").append(listItem);
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
