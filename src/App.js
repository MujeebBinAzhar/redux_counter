import React from 'react'
import "./style.css"
import {incNumber, decNumber} from './actions/index'

import { useSelector, useDispatch } from 'react-redux'
 

const App = () => {


  const myState=useSelector((state)=>state.changeNumber);
  const dispatch=useDispatch();
  return (
    <div className='container' >    

      <h1>Welcome to Reduxx</h1>
      <h2>Increment/Decrement counter</h2>
      <h3>Using React and Redux</h3>

      <div className="counter">
        <button onClick={()=> dispatch(decNumber()) }>-</button>
        <span>{myState}</span>
        <button onClick={()=> dispatch(incNumber())}>+</button>
      </div>
    </div>
  )
}

export default App