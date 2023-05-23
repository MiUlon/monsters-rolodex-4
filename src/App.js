import React from 'react';
import CardList from './components/card-list/card-list.components';
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

        <input
          className='search-box'
          type='search'
          placeholder='Search monsters'
          onChange={onSearchFieldChange}
        />

        {/* {
          filteredMonsters.map((monster) => {
                return <div key={monster.id}>
                          <h1>{ monster.name }</h1>
                      </div>
          })
        } */}
        <CardList />
      </div>
    );
  }
}

export default App;