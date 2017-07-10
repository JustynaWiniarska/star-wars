import React, { Component } from 'react';
import './Main.css'

import People from '../People/People';
import Planets from '../Planets/Planets';
import Vehicles from '../Vehicles/Vehicles';

import callPeople from '../helperFunctions/callPeople';
import callPlanets from '../helperFunctions/callPlanets';
import callVehicles from '../helperFunctions/callVehicles'


export default class Main extends Component {
  constructor() {
    super()
    this.state={
      people:[],
      planets: [],
      vehicles: []
    }
  }

  componentDidMount(){
    callPeople('people', this)
    callPlanets('planets', this)
    callVehicles('vehicles', this)
  }



  render() {

//rendering 3 times!!

    // console.log('planets state', this.state.planets)
    // console.log('people state', this.state.people)
    // console.log('vehicle state', this.state.vehicles)
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
          <People peopleList={this.state.people} />
        }
        </div>

        <div>
          {
            this.state.people.length === 0 ?
              <div className='loader'></div> :
            <Planets planetList={this.state.planets} />
          }
        </div>

        <div>
          <Vehicles vehicleList={this.state.vehicles} />
        </div>

      </div>
    )
  }
}
