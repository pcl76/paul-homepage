const API_KEY = "6beb081c81aceb710d42cced3fb3f145";
const API_URL_BASE = "https://api.openweathermap.org/data/2.5/weather?lat=52.374&lon=4.89&appid=";
const API_URL = API_URL_BASE + API_KEY;

const getWeather = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();

  return json;
};

export default getWeather;