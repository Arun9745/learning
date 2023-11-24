import React ,{useState} from 'react'

const App = () => {
  const [counter, SetCounter]=useState(0);

  function IncreaseCounter() {
    SetCounter(counter+1);
  }
 
  return (
    <div>
      <h1>Counter: {counter}</h1>
        <button onClick={IncreaseCounter}>Increase</button>
      
    </div>
  )
}

export default App
