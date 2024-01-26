import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [selected, setSelected] = React.useState('two');

  return (
    <div className="App">

      <form>
        <fieldset>
        <legend>Select one value</legend>
        <select value={selected} onChange={(event) => setSelected(event.target.value)}>
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
          <option value="four">Four</option>
          <option value="five">Five</option>
        </select>
        </fieldset>
      </form>
      
      <p>Selected value: {selected}</p>
    </div>
  );
}

export default App;
