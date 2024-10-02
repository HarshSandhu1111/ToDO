import React from 'react'
import './Components.css'
const Componenets = ({text,updateToDo,deletetodo}) => {
  return (
    <div className='todo'>
        <div className='text'>
            {text}
            <button onClick={deletetodo}>Delete</button>

        </div>
        <div className='icons'>

        </div>
      
    </div>
  )
}

export default Componenets;
