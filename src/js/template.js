export const originalCard = weather => {
  return `
    <div class="card-details p-9 text-white rounded-lg my-5" style="background-image: url(src/img/card_details.png); background-size:cover; ">
      <div class="row-1 day flex justify-between items-center pb-5">
        <h3 class="text-xl font-medium">Today</h3>
        <h3 class="font-light">${weather.current.last_updated}</h3>
      </div>
      <div class="row-2 specifc flex justify-between items-center pb-5">
        <div class="text-info">
          <h3 class="text-4xl font-semibold ">${weather.current.temp_c}<span class="text-lime ">°C</span></h3>
          <p class="text-half-white text-lg">${weather.current.condition.text}</p>
        </div>
        <img src="${weather.current.condition.icon}" width="100" alt="partly cloudly">
      </div>
      <div class="row-3 location flex text-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#28E13B" class="bi bi-geo-alt-fill"
          viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
        &nbsp;
        ${weather.location.name}, ${weather.location.country}
      </div>
    </div>
  `
}

export const windCard = weather => {
  return `
    <img src="src/img/wind.png" width="38" height="38" alt="wind">
    <div class="text pl-4">
      <p class="text-light-gray font-light text-xs lg:text-sm">Wind Speed</p>
      <h3 class="text-white font-semibold text-xl lg:text-2xl">${weather.current.wind_mph}/mph</h3>
    </div>
  `
}

export const pressure = weather => {
  return `
    <img src="src/img/waves.png" width="38" height="38" alt="wind">
    <div class="text pl-4">
      <p class="text-light-gray font-light text-xs lg:text-sm">Pressure</p>
      <h3 class="text-white font-semibold text-xl lg:text-2xl">${weather.current.pressure_mb}/mb</h3>
    </div>
  `
}
export const feelsCard = weather => {
  return`
    <img src="src/img/temp.png" width="38" height="38" alt="wind">
    <div class="text pl-4">
      <p class="text-light-gray font-light text-xs lg:text-sm">Feels Like</p>
      <h3 class="text-white font-semibold text-xl lg:text-2xl">${weather.current.feelslike_c}°C</h3>
    </div>
  `
}

export const uvCard = weather => {
  return `
    <img src="src/img/uv.png" width="38" height="38" alt="wind">
    <div class="text pl-4">
      <p class="text-light-gray font-light text-xs lg:text-sm">UV Index</p>
      <h3 class="text-white font-semibold text-xl lg:text-2xl">${weather.current.uv}/mph</h3>
    </div>
  `
}

export const exampleCard = weather => {
  return`
    <div class="card bg-light-navy w-full md:w-full lg:w-52 break-words p-6 rounded-lg mr-3 mb-3  relative"> 
      <div class="row-1 flex justify-between items-center pb-10 ">
        <div class="text-info text-white pr-8">
          <h4 class="text-2xl font-semibold">${weather.current.temp_c}<span class="text-lime">°C</span></h4>
          <p class="text-light-gray">${weather.current.condition.text}</p>
        </div>
        <img src="${weather.current.condition.icon}"  alt="${weather.current.condition.text}">
      </div>
      <div class="location absolute bottom-6">
        <h3 class="text-white">${weather.location.name}</h3>
      </div>
    </div>
  `
}

export const liveCard = weather => {
  return `
    <div class="card bg-light-navy w-full md:w-full border border-lime lg:w-52 break-words p-6 rounded-lg mr-3 mb-3  relative"> 
      <div class="row-1 flex justify-between items-center pb-10 ">
        <div class="text-info text-white pr-8">
          <h4 class="text-2xl font-semibold">${weather.current.temp_c}<span class="text-lime">°C</span></h4>
          <p class="text-light-gray">${weather.current.condition.text}</p>
        </div>
        <img src="${weather.current.condition.icon}"  alt="${weather.current.condition.text}">
      </div>
      <div class="location absolute bottom-6">
        <h3 class="text-white">${weather.location.name}</h3>
      </div>
    </div>
  `
}

