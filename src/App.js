import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monstars : [ ],
      searchField : '',
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monstars : users}))

  }
  render(){
    const { monstars, searchField } = this.state;
    const monstarFilter = monstars.filter(monstar => monstar.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monstar Cats</h1>
        <SearchBox 
        placeholder="search cats" 
        handleChange={e => this.setState({ searchField : e.target.value }) } />
     
      <CardList monstars={ monstarFilter } />
      </div>
    );
  }
 
}

export default App;
