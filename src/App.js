import React from 'react';
import './App.css';
import PlayerScore from './playerScore';
import allCountryScores from './scores';
function App() {
  // console.log(allCountryScores)
  return (
    <div className="App">
      
        <h1>High Scores Per country</h1>
        <PlayerScore scoreData={allCountryScores}/>
        
    </div>
  );
}

export default App;
