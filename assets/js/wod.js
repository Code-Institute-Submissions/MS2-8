let wod;
let gender;
let type;
let experience;

/**
 * Gets weight based on gender
 * @param {string} gender 
 * @param {object} weight 
 */
function getWeight(gender, weight) {
  if (gender === "woman") {
    return weight.w;
  } else {
    return weight.m;
  }
}

/**
 * Filter by experience
 * @param {object} item 
 */
function filterExperience(item) {
  return item.experience === experience;
}

/**
 * Filter by type
 * @param {object} item 
 */
function filterType(item) {
  if (type === "ALL") {
    return true;
  } else {
    return item.type === type;
  }
}

/**
 * Get random item filter by type and experience
 * @param {object} items 
 */
function getRandomItem(items) {
  items = items.filter(filterExperience);
  items = items.filter(filterType);
  let index = Math.floor(Math.random() * items.length);
  return items[index];
}
/**
 * Sets the weight and render list items
 */
function setWeight() {
  $("#card-steps").empty();
  for (let i = 0; i < wod.steps.length; i++) {
    let weight = getWeight(gender, wod.steps[i].weight);

    let listItem =
      '<li class="list-group-item">' +
      wod.steps[i].repetitions +
      " x " +
      wod.steps[i].name;
    if (weight > 0) {
      listItem += " " + weight + " " + wod.steps[i].unit;
    }
    listItem += "</li>";

    $("#card-steps").append(listItem);
  }
}

/**
 * Get random WOD fron API, resets all value and renders WOD content
 */
function getRandomWod() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      gender = $("input:radio[name ='gender']:checked").val();
      experience = $("#experience").val();
      type = $("#wod-type").val();

      let json = JSON.parse(this.responseText);
      wod = getRandomItem(json.Items); // get random wod

      document.getElementById("card-title").innerHTML = wod.name;
      document.getElementById("card-type").innerHTML = wod.type;
      document.getElementById("card-level").innerHTML = wod.experience;
      resetTimer(wod.time); // will reset timer
      setWeight();
    }
  };

  xhr.open(
    "GET",
    "https://c3kb4h1rub.execute-api.eu-north-1.amazonaws.com/Prod/"
  );
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.send();
}

$("#random-wod").click(function () {
  getRandomWod();
});

$("input:radio[name ='gender']").change(function () {
    gender = $(this).val();
    setWeight();
});

$("#experience").change(function () {
     getRandomWod();
});

$("#wod-type").change(function() {
    getRandomWod();
});

getRandomWod();
