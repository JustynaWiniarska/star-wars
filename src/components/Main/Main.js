import React, { Component } from 'react';
import { NavLink, Link, Route, BrowserRouter as Router} from 'react-router-dom';
import './Main.css'

import NavBar from '../NavBar/NavBar';
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
      <Router>
        <div className='main'>
          <header>
            <img className='logo' src={require('./star-wars-logo.svg')} alt='Star Wars'/>

          <button className='favorites-btn'>View Favorites</button>
          <hr />
          </header>

        <NavBar />

        <Route exact path='/people' render={({ match }) =>
          <People peopleList={this.state.people} />
        }/>

        <Route exact path='/planets' render={({ match }) =>
          <Planets planetList={this.state.planets} />
        }/>

        <Route exact path='/vehicles' render={({ match }) =>
          <Vehicles vehicleList={this.state.vehicles} />
        }/>

        </div>
      </Router>
    )
  }
}
