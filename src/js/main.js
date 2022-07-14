import { feelsCard, originalCard, pressure, uvCard, windCard } from './template.js'
const search_input = document.getElementById("search-box");
const mainCardDetails = document.getElementById("main-details");
const mainWind = document.getElementById("main-wind");
const mainPressure = document.getElementById("main-pressure");
const mainFeels = document.getElementById("main-temp");
const mainUV = document.getElementById("main-uv")

search_input.addEventListener("input", async e => {
  e.preventDefault()
  const value = e.target.value;
  await searchData(value);
});

async function searchData(city) {
  const key = "ae2ade5033e9450198d64844220502";
  const resp = await fetch("https://api.weatherapi.com/v1/current.json?key=ae2ade5033e9450198d64844220502&q=" + city + "&aqi=no");
  const respData = await resp.json();
  mainCardDetails.innerHTML =  originalCard(respData);
  mainWind.innerHTML = windCard(respData);
  mainPressure.innerHTML = pressure(respData);
  mainFeels.innerHTML = feelsCard(respData);
  mainUV.innerHTML = uvCard(respData);
}

document.addEventListener("DOMContentLoaded", async () => {
  await searchData("palembang")
})


