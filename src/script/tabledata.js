const numeral = require("numeral");

const tableData = document.querySelector("#tableData");

const getCountryData = async () => {
  const response = await fetch("https://disease.sh/v3/covid-19/countries");
  const data = await response.json();
  const setCountries = data.map((country) => ({
    name: country.country,
    cases: country.cases,
    flag: country.countryInfo.flag,
  }));

  function sortData(prop) {
    return function (a, b) {
      if (a[prop] < b[prop]) {
        return 1;
      } else if (a[prop] > b[prop]) {
        return -1;
      }
      return 0;
    };
  }

  setCountries.sort(sortData("cases"));
  let temp = "";
  for (let item in setCountries) {
    temp = `
    <tr>
    <td><img src="${setCountries[item].flag}> ${setCountries[item].name}</td>
    <td>${numeral(setCountries[item].cases).format('0,0')}</td>
    </tr>`;
  }
  tableData.innerHTML = temp;
};

export default getCountryData;
