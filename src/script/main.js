var numeral = require("numeral");

const main = () => {
  const totalCases = document.querySelector("#totalCases");
  const totalActive = document.querySelector("#totalActive");
  const totalRecovered = document.querySelector("#totalRecovered");
  const totalDeaths = document.querySelector("#totalDeaths");
  const todayConfirmed = document.querySelector("#tConfirmed");
  const todayRecovered = document.querySelector("#tRecovered");
  const todayDeaths = document.querySelector("#tDeaths");
  const totalCountry = document.querySelector("#tCountry");

  const getGlobalData = async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/all");
    const data = await response.json();
    // console.log(data);
    totalCases.setAttribute("data-target", data.cases);
    totalActive.setAttribute("data-target", data.active);
    totalRecovered.setAttribute("data-target", data.recovered);
    totalDeaths.setAttribute("data-target", data.deaths);
    todayConfirmed.innerHTML = numeral(data.todayCases).format("0,0");
    todayRecovered.innerHTML = numeral(data.todayRecovered).format("0,0");
    todayDeaths.innerHTML = numeral(data.todayDeaths).format("0,0");
    totalCountry.innerHTML = data.affectedCountries;

    $(".count-people").each(function () {
      var obj = $(this);
      jQuery({ Counter: 0 }).animate(
        { Counter: obj.attr("data-target") },
        {
          duration: 2000,
          easing: "swing",
          step: function (now) {
            obj.text(Math.ceil(now));
          },
          complete: function () {
            obj.text(Math.ceil(obj.text()).toLocaleString("en"));
          },
        }
      );
    });
  };

  getGlobalData();
};

export default main;
