import React from 'react';
import CardList from './components/card-list/card-list.components';
import SearchBox from './components/search-box/search-box.components';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState(() => {
          return { monsters: users }
        })
      })
      .catch(error => console.log('Got error: ', error))
  }

  onSearchFieldChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();          
    this.setState(() => {
      return { searchField: searchField }
    })
  };

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchFieldChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox className='monsters-search-box' placeholder='Search Monsters' onSearchFieldChange={onSearchFieldChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;