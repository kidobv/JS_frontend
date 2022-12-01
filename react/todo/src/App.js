import './App.css';
import {useState} from 'react';

function App() {
  const [list, setList] = useState([]);

  const addItem = (e) =>{
    e.preventDefault();
    const inputE = document.getElementById('textInput');
    const newItem = inputE.value.trim(" ");
    inputE.value = "";
    if(newItem){
      setList([...list, newItem]) 
    }       
  }

  return (
    <div className="App">
      <header>
        <h1> My TODOs</h1>
      </header>

      <form>
          <input id='textInput' type="text" />
          <button 
          id="submitBtn" 
          type="submit"
          onClick={addItem}
          >
            Add
          </button>
      </form>

      <div className="todo-container">
       { list.length > 0 &&
       <ul className="todo-list">
          {
            list.map((item, idx) => 
              <li key={idx} id={`item${idx}`}>{item}</li>
            )            
          }
        </ul>
      }
      </div>
    </div>
  );
}

export default App;
