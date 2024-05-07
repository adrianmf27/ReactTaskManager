import { useState, useEffect } from 'react';
import './App.css';

function App() {
  let [task, setTask] = useState(
    [
      {
        name: "Task1",
        place: "School",
        priority: 0
      },
      {
        name: "Task2",
        place: "House",
        priority: 1
      }
    ]
  )
  return (
    <>
      <div>
        <ul>
          { task.map (t =>
            <li>
              <b>{t.name}</b>
              <div>Place {t.place}</div>
              <div>Place: {t.place}</div>
            </li>)
          }
        </ul>       
      </div>
    </>
  );
}

export default App;
