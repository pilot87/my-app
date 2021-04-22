import React from 'react';
import './App.css';
import {store} from './app/store'
import {dupHistory, inc} from "./features/counter/useCounter";
import {useSelector} from "react-redux";
import {CounterState} from "./features/counter/counterSlice";



const handleDup = async () => {
    store.dispatch(dupHistory())
}

const handleInc = async () => {
    store.dispatch(inc())
}


function App() {
    const history = useSelector((state: {counter: CounterState}) =>
        state.counter.history).map((obj) => <p>{obj.nn.map((n) => <a>{n}</a>)}</p>)


  return (<>
    <div className="App">
      <button onClick={handleDup}>Dup</button>
      <button onClick={handleInc}>[0, 2]</button>
    </div>
          <div>{history}</div>
      </>
  );
}

export default App;
