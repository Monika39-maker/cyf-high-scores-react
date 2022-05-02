import React from 'react';
import { Table } from 'react-bootstrap';
import './App.css';



function PlayerScore({scoreData}) {
    
    return (
      <>
        
          {scoreData.map((country, i) => {
            return (
              <Table>
              <thead>
                <tr className='table-heading'><th>HIGH SCORES: {country.name}</th></tr>
                <tr>
                  <th className='bordered'>Player Name</th>
                  <th className='bordered'>Player Score</th>
                </tr>
              </thead> 
              <tbody>{country.scores.map(player => {
                return (
                  <tr className='player-score'>
                    <td className='bordered'>{player.n}</td>
                    <td className='bordered'>{player.s}</td>
                  </tr>
                )
              })}
                
                
              </tbody>
              
              </Table>
            )
          })}
        
      </>
  )
}

export default PlayerScore