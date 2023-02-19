import React, { useState } from 'react';
import './App.css';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data)

  return (
  <main>
    <section className='App'>
      <h3>{people.length} birthday's today</h3>
      <List people={people}/>
      <button onClick={()=> setPeople([]) }>clear All</button>
    </section>
  </main>
  )
}

export default App;
