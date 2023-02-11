import React from 'react';
import './App.css';

import CardList from './components/card-list/Card-list-component';
import SearchBox from './components/search-box/Search-box-component';

class App extends React.Component {
  // initial state
  state = {
    monsters: [],
    searchFeild: ''
  }

  componentDidMount() {
    // update the state
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  // change handler funtion
  onChangeHandler = (event) => {
    const searchFeild = event.target.value.toLowerCase()
    this.setState({ searchFeild })
  }

  render() {
    // destructure variables from state
    const { monsters, searchFeild } = this.state
    // destructure methods from class component
    const { onChangeHandler } = this
    // filter monsters
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchFeild)
    })

    return (
      <div className="App">
        <h1 className='app_title'>Monsters Rolodex</h1>
        <SearchBox className="search_box" placeholder="Search Monsters by Name" onChangeHandler={onChangeHandler} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
