import React, { useState } from "react";
import "./styles.css";
import Pagination from "./pagination";

export default function App() {
  
  const [data, setData] = useState(null);

  return (
    <div className="App">
      <h1>Giphy Client</h1>      
      <Pagination setData = {setData}></Pagination>
      {data && (
        <div>
          <h2>Results</h2>
          <ul>
            {data.map(d => (
              <li key={d.id}>
                <img src={d.images.fixed_width.url} alt={d.title} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
