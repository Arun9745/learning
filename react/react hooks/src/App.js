import React ,{useState} from 'react'

const App = () => {
  const [counter, SetCounter]=useState(0);

  function DecreaseCounter() {
    SetCounter(counter-1);
  }
 
  return (
    <div>
      <h1>Counter: {counter}</h1>
        <button onClick={DecreaseCounter}>Decrease</button>
      
    </div>
  )
}

export default App
