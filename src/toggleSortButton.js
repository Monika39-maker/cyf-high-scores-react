import React from 'react'

function ToggleSortButton({handleButtonClick, buttonInnerText}) {
    
  return (
    <div>
        <button onClick={handleButtonClick}>{buttonInnerText}</button>
    </div>
  )
}

export default ToggleSortButton