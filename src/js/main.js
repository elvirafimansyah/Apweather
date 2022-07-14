import { exampleCard, feelsCard, liveCard, originalCard, pressure, uvCard, windCard } from './template.js'
const search_input = document.getElementById("search-box");
const mainCardDetails = document.getElementById("main-details");
const mainWind = document.getElementById("main-wind");
const mainPressure = document.getElementById("main-pressure");
const mainFeels = document.getElementById("main-temp");
const mainUV = document.getElementById("main-uv")
const mainExample = document.getElementById("main-example");

search_input.addEventListener("input", async e => {
  e.preventDefault()
  const value = e.target.value;
  await searchData(value);
});

async function searchData(city) {
  const key = "ae2ade5033e9450198d64844220502";
  const resp = await fetch("https://api.weatherapi.com/v1/current.json?key=ae2ade5033e9450198d64844220502&q=" + city + "&aqi=no");
  const respData = await resp.json();
  try {
    mainCardDetails.innerHTML =  originalCard(respData);
    mainWind.innerHTML = windCard(respData);
    mainPressure.innerHTML = pressure(respData);
    mainFeels.innerHTML = feelsCard(respData);
    mainUV.innerHTML = uvCard(respData);
    console.log("berhasil")
  } catch(err) {
    console.log("error", respData.error.message)
  }
}

async function contentData(city) {
  const resp = await fetch("https://api.weatherapi.com/v1/current.json?key=ae2ade5033e9450198d64844220502&q=" + city + "&aqi=no");
  const respData = await resp.json();

  mainExample.innerHTML += exampleCard(respData);
}

async function liveLocation(city) {
  const resp = await fetch("https://api.weatherapi.com/v1/current.json?key=ae2ade5033e9450198d64844220502&q=" + city + "&aqi=no");
  const respData = await resp.json();

  mainExample.innerHTML += liveCard(respData);
}

document.addEventListener("DOMContentLoaded", async () => {
  await liveLocation("palembang")
  const resp = await fetch("https://restcountries.com/v3.1/all");
  const country = await resp.json();
  
  for(let i =0; i < country.length; i++) {
    const arr = country[i].name.common.toLowerCase();
    await contentData(arr)
    console.log(arr)
  }

  // for (let i =0; i < country.length; i++) {
  //   await contentData(country[i])
  // }

  await searchData("palembang") 
})


