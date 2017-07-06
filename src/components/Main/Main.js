import React, { Component } from 'react';
import './Main.css'

export default class Main extends Component {
  constructor() {
    super()
    this.state={
      people:[],
    }
  }


  render() {
    return (
      <div className='main'>
        <header>
          <img className='logo' src={require('./star-wars-logo.svg')} alt='Star Wars'/>

        <button className='favorites'>View Favorites</button>
        <hr />
        </header>

        <button>characters</button>
        <button>planets</button>
        <button>vehicles</button>
      </div>
    )
  }
}
