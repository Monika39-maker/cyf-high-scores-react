import React, {useState} from 'react';
import './App.css';
import PlayerScore from './playerScore';
import allCountryScores from './scores';
import ToggleSortButton from './toggleSortButton';
import WorldWideTable from './worldWideTable';

function App() {
  
  allCountryScores.sort((countryA, countryB) => {
          const {name: nameA } = countryA;
          const {name: nameB } = countryB;

          if (nameA.toLowerCase() < nameB.toLowerCase()) {
            return -1
          } else {
            return 0;
          }
  })

  const sortPlayerScoresInAscendingOrder = () => {
      for (let country of allCountryScores) {
        country.scores.sort((a, b) => {

            if (a.s < b.s) {
              return -1
            } else {
              return 0;
            }
      })
      
    }
    
}
  const sortPlayerScoresIndecendingOrder = () => {
      for (let country of allCountryScores) {
        country.scores.sort((a, b) => {

            if (a.s > b.s) {
              return -1
            } else {
              return 0;
            }
      })
      
    }
    
}
  const [buttonIsClicked, setButtonIsClicked] = useState(false);
  const [buttonInnerText, setButtonInnerText] = useState('sort scores in decending order')
  const handleButtonClick = () => {
    setButtonIsClicked(!buttonIsClicked)
    if (buttonIsClicked) {
      setButtonInnerText('sort scores in decending order')
     sortPlayerScoresInAscendingOrder() 
    } else {
      setButtonInnerText('sort scores in ascending order')
      sortPlayerScoresIndecendingOrder()
    }
  }
  return (
    <div className="App">
        <ToggleSortButton handleButtonClick={handleButtonClick}
         buttonInnerText={buttonInnerText}
        />
        <h1>High Scores Per country:</h1>
        <PlayerScore
         scoreData={allCountryScores}
        />
        <WorldWideTable scoreData={allCountryScores.map((country) => country.scores)}/>
        
    </div>
  );
}

export default App;
