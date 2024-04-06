const ACCESS_KEY = "ReJ_95HQeJeS4q-qiRiaUYZxURrZx4MBgkTJQj-h4Ns";
const API_URL_BASE = "https://api.unsplash.com/photos/random?orientation=landscape&client_id=";
const API_URL = API_URL_BASE + ACCESS_KEY;
console.log(API_URL)

const getRandomPhoto = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();

  return json;
};

export default getRandomPhoto;