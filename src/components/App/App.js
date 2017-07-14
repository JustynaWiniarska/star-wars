import React, { Component } from 'react';
import './App.css';

import Film from '../Film/Film';
import { cleanFilmData } from '../Film/cleanFilmData';

import Main from '../Main/Main';

class App extends Component {
  constructor(){
    super()
    this.state={
      film: {},
    }
  }

  componentWillMount(){
    fetch('http://swapi.co/api/films/1/')
    .then(res => res.json())
    .then(movie => {
      // console.log(this.state.film)
      this.setState({film: cleanFilmData(movie)})
    })
    .catch(error => console.log('error fetching film:', error))
  }

  render() {
    return (
      <div className="app">

        <Film film={this.state.film}/>

        <Main />

      </div>
    );
  }
}

export default App;
