import React from 'react';
import './App.css';
import PlayerScore from './playerScore';
import allCountryScores from './scores';
function App() {
  
  return (
    <div className="App">
      
        <h1>High Scores Per country:</h1>
        <PlayerScore scoreData={allCountryScores}/>
        
    </div>
  );
}

export default App;
