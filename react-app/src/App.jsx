import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count,setCount]=useState("")
  const Result =(e)=>{
    setCount(count.concat(e.target.name)  )
  }
  const operation=()=>{
    setCount(eval(count))
   
  }
  const clear =()=>{
    setCount("")
  }
  const Delate =()=>{
    setCount(count.slice(0,-1))
  }
  
  return (
    <div>
      App
      <div>
      <h1>{count}</h1>
      </div>
      <div>
      <button name='1' onClick={Result}>1</button>
      <button name='2' onClick={Result}>2</button>
      <button name='3' onClick={Result}>3</button>
      <button name='/' onClick={Result}>/</button>
      </div>
      <div>
      <button name='4' onClick={Result}>4</button>
      <button name='5' onClick={Result}>5</button>
      <button name='6' onClick={Result}>6</button>
      <button name='*' onClick={Result} >*</button>
      </div>
      <div>
      <button name='7' onClick={Result}>7</button>
      <button name='8' onClick={Result}>8</button>
      <button name='9' onClick={Result}>9</button>
      <button >+</button>
      </div>
      <div>
      <button onClick={Delate}>del</button>
      <button onClick={clear}>Ac</button>
      <button onClick={operation}>=</button>
      <button>-</button>
      </div>
    </div>
    
  )
}

export default App