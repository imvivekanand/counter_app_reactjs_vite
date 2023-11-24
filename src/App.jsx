import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(51)

  let increment = () => {
    if(count < 100){
    setCount(count + 1);
  }
  }
  let decrement = () => {
    if(count > 0){
    setCount(count - 1);
    }
  }

  return (
    <>
      <h1>ReactJs Counter Application | Vite | Limit 0 to 100</h1>
      <h3>Current Value: {count}</h3>
      <button onClick={increment}>Increment Value</button>
      <button onClick={decrement}>Decrement Value</button>
      <p>Designed By Vivek Anand</p>
    </>
  )
}

export default App
