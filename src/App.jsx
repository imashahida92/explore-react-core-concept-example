import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './User'
import Friends from './Friends'

function App() {
  function handleClick(){
    alert('button click');
  }

  const handleClick2=()=>{
    alert('button 2 clicked')
  }

  const addToFive=(num)=>{
    alert(num+5);
  }
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <button onClick={handleClick}>Click Me</button><br/>
      <button onClick={handleClick2}>Click Me2</button><br/>
      <button onClick={()=>{alert('third button clicked')}}>Click Me3</button><br />
      {/* //if parameter in function */}
      <button onClick={()=>addToFive(4)}>Click 4</button>


      <Counter></Counter>


      <Team></Team>
      <Users></Users>
      <Friends></Friends>
    </>
  )
}

export default App
