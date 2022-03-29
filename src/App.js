import React from 'react';
import './App.css';
import PlayerScore from './playerScore';
import allCountryScores from './scores';
function App() {
  // const sortedAlphabetically = 
  allCountryScores.sort((countryA, countryB) => {
          const {name: nameA } = countryA;
          const {name: nameB } = countryB;

          if (nameA.toLowerCase() < nameB.toLowerCase()) {
            return -1
          } else {
            return 0;
          }
        })
  return (
    <div className="App">
      
        <h1>High Scores Per country:</h1>
        <PlayerScore scoreData={allCountryScores}/>
        
    </div>
  );
}

export default App;
