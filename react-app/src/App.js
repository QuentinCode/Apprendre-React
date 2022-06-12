import {useState} from 'react'
import Item from './item'

function App() {

  // console.log(useState())

  const [monState, setMonState] = useState(10)
  const modifyState = () => {
    setMonState(20)
  }
  // console.log(monState);
  return (
    <div className="App">
      <h1>Hello state : {monState}</h1>
      <button onClick={modifyState}>Change State</button>

      <Item></Item>
    </div>
  );
}

export default App;
