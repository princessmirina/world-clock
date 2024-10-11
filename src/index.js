function updateTime() {
  let newYorkCityElement = document.querySelector("#new-york-city");
  if (newYorkCityElement) {
    let newYorkCityDateElement = newYorkCityElement.querySelector(".date");
    let newYorkCityTimeElement = newYorkCityElement.querySelector(".time");
    let newYorkCityTime = moment().tz("America/New_york");

    newYorkCityDateElement.innerHTML = newYorkCityTime.format("MMMM Do YYYY");
    newYorkCityTimeElement.innerHTML = newYorkCityTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //seoul
  let seoulCityElement = document.querySelector("#seoul");
  if (seoulCityElement) {
    let seoulCityDateElement = seoulCityElement.querySelector(".date");
    let seoulCityTimeElement = seoulCityElement.querySelector(".time");
    let seoulCityTime = moment().tz("Asia/Seoul");

    seoulCityDateElement.innerHTML = seoulCityTime.format("MMMM Do YYYY");
    seoulCityTimeElement.innerHTML = seoulCityTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Addis-Ababa
  let addisCityElement = document.querySelector("#addis-ababa");
  if (addisCityElement) {
    let addisCityDateElement = addisCityElement.querySelector(".date");
    let addisCityTimeElement = addisCityElement.querySelector(".time");
    let addisCityTime = moment().tz("Africa/Addis_Ababa");

    addisCityDateElement.innerHTML = addisCityTime.format("MMMM Do YYYY");
    addisCityTimeElement.innerHTML = addisCityTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Dar-es-salaam
  let darCityElement = document.querySelector("#dar-es-salaam");
  if (darCityElement) {
    let darCityDateElement = darCityElement.querySelector(".date");
    let darCityTimeElement = darCityElement.querySelector(".time");
    let darCityTime = moment().tz("Africa/Dar_es_salaam");

    darCityDateElement.innerHTML = darCityTime.format("MMMM Do YYYY");
    darCityTimeElement.innerHTML = darCityTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Kenya
  let nairobiCityElement = document.querySelector("#nairobi");
  if (nairobiCityElement) {
    let nairobiCityDateElement = nairobiCityElement.querySelector(".date");
    let nairobiCityTimeElement = nairobiCityElement.querySelector(".time");
    let nairobiCityTime = moment().tz("Africa/Nairobi");

    nairobiCityDateElement.innerHTML = nairobiCityTime.format("MMMM Do YYYY");
    nairobiCityTimeElement.innerHTML = nairobiCityTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = ` <div class="city" >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss "
          )}<small>${cityTime.format("A")}</small></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

// add event listener to the select

let citySelectElement = document.querySelector("#cities");
citySelectElement.addEventListener("change", updateCity);
