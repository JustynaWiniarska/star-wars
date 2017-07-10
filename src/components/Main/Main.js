import React, { Component } from 'react';
import './Main.css'

import People from '../People/People';
import Planets from '../Planets/Planets';

import cleanPlanetData from '../Planets/cleanPlanetData';
import callPeople from '../helperFunctions/callPeople';
import callPlanets from '../helperFunctions/callPlanets';

export default class Main extends Component {
  constructor() {
    super()
    this.state={
      people:[],
      planets: [],
    }
  }

  componentDidMount(){
    callPeople('people', this)
    callPlanets('planets', this)
  }


  render() {
    console.log('planets state', this.state.planets)
      console.log('people state', this.state.people)
    return (
      <div className='main'>
        <header>
          <img className='logo' src={require('./star-wars-logo.svg')} alt='Star Wars'/>

        <button className='favorites-btn'>View Favorites</button>
        <hr />
        </header>

        <button>characters</button>
        <button>planets</button>
        <button>vehicles</button>

        <div>
          {
            this.state.people.length === 0 ?
              <div className='loader'></div> :
          <People characters={this.state.people}/>
        }
        </div>

        <div>
          <Planets planetList={this.state.planets}/>
        </div>

      </div>
    )
  }
}
