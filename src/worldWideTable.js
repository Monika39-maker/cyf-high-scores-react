import React from 'react'

export default function WorldWideTable({scoreData}) {
  let combinedScoreData = scoreData.flat().sort((a, b) => {
    if (a.s > b.s) {
      return -1
    }
    if (a.s < b.s) {
      return 1
    }
    return 0
  })
  return (
    <div>
      <h1>World Wide Table</h1>
      <table>
        <thead>
          <td>Player Name</td>
          <td>Player Score</td>
        </thead>
          <tbody>
            {
            combinedScoreData.map(player => {
                    
                        return (
                          <tr className='player-score'>
                            <td className='bordered'>{player.n}</td>
                            <td className='bordered'>{player.s}</td>
                          </tr>
                        )    
                  
                
            })
            }
          </tbody>
        
      </table>
    </div>
  )
}
