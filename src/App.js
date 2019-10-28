import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { CardList } from './components/card-list/CardList';
import { SearchBox } from './components/search-box/SearchBox';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');


useEffect(() => {
  axios
    .get('https://jsonplaceholder.typicode.com/users')
      .then(response => setMonsters(response.data)
    )
}, [searchField])


const handleChange = (e) => {
  setSearchField(e.target.value)
}

const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

  return (
    <div className="App">
      <SearchBox
        placeholder='search'
        handleChange={handleChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
