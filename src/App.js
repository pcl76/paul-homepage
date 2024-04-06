import './App.css';
import Weather from './features/weather/weather.js';
import Quote from './features/quote/quote.js';
import Searchbar from './features/searchbar/searchbar.js';
import Todolist from './features/todolist/todolist.js';
import getWeather from './utils/getWeather.js';
import getRandomPhoto from './utils/getRandomPhoto.js';
import getRandomQuote  from './utils/getRandomQuote.js';
import React, {useState} from 'react';

const weatherResult = await getWeather();
const RandomPhoto = await getRandomPhoto();
const URL_photo = RandomPhoto.urls.full;
//const URL_photo = "https://tse1.mm.bing.net/th?id=OIP.J9sfzSNX-OJxedkKslhaXAHaE7&pid=Api";
const randomQuote = await getRandomQuote();

//const lijstje = ["itemTopic1","item2","item3","item4","item5","itemTopic1","item2","item3","item4","item5"]

function App() {
const [goals, setGoals] = useState([]);


const addGoal = (goal) => {
   setGoals(goals =>  [goal, ...goals])
}

const removeGoal = () => {
  alert('removed')
}

const doneGoal = () => {
  alert('done')
}

//console.log(goals);

  return (
    <div >
      
      <img className="photo" src={URL_photo} alt="random"/>        
      
      <div className="App">
        <div>
          < Weather 
            weatherResult={weatherResult}/>
        </div>
        <div>
          < Searchbar addGoal={addGoal}/>
          < Todolist lijstje={goals} removeGoal={removeGoal} doneGoal={doneGoal}/>
        </div>
        <div>
          < Quote 
            randomQuote={randomQuote}/>
        </div>
      </div>
    </div>
  );
}

export default App;
