const numeral = require('numeral');

const tableData = document.querySelector('#tableData');

const getCountryData = async () => {
  const response = await fetch('https://disease.sh/v3/covid-19/countries');
  const data = await response.json();
  const setCountries = data.map((country) => ({
    name: country.country,
    cases: country.cases,
    flag: country.countryInfo.flag,
  }));

  const sortData = (prop) => (a, b) => b[prop] - a[prop];

  setCountries.sort(sortData('cases'));
  let temp = '';
  for (let item in setCountries) {
    temp += `
    <tr>
    <td><img src=${setCountries[item].flag}> ${setCountries[item].name}</td>
    <td>${numeral(setCountries[item].cases).format('0,0')}</td>
    </tr>`;
  }
  tableData.innerHTML = temp;
};

export default getCountryData;
