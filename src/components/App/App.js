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

  componentDidMount(){
    fetch('http://swapi.co/api/films/1/')
    .then(res => res.json())
    .then(movie => {
      console.log(this.state.film)
      this.setState({film: cleanFilmData(movie)})

    })
  }

  render() {
    return (
      <div className="app">

        <Film film={this.state.film}/>
        <hr/>

        <Main />

      </div>
    );
  }
}

export default App;
