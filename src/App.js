import React from 'react';
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

  render() {

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    })

    return (
      <div className="App">

        <input
          className='search-box'
          type='search'
          placeholder='Search monsters'
          onChange={(event) => {
            const searchField = event.target.value.toLocaleLowerCase();
            
            this.setState(() => {
              return { searchField: searchField }
            })
          }}
        />

        {
          filteredMonsters.map((monster) => {
                return <div key={monster.id}>
                          <h1>{ monster.name }</h1>
                      </div>
          })
        }

      </div>
    );
  }
}

export default App;