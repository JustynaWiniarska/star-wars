import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router} from 'react-router-dom';
import './Main.css'

import NavBar from '../NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage';
import People from '../People/People';
import Planets from '../Planets/Planets';
import Vehicles from '../Vehicles/Vehicles';
import DisplayFavorites from '../Favorites/DisplayFavorites';

import callPeople from '../helperFunctions/callPeople';
import callPlanets from '../helperFunctions/callPlanets';
import callVehicles from '../helperFunctions/callVehicles'


export default class Main extends Component {
  constructor() {
    super()
    this.state={
      people:[],
      planets: [],
      vehicles: [],
      favorites: [],
      favoritesCount: 0,
    }
  }

  componentDidMount(){
    callPeople('people', this)
    callPlanets('planets', this)
    callVehicles('vehicles', this)
  }


  saveFavorite(favorite) {
    // alert('connected')

    const favoritesArray = this.state.favorites
    const newArray = favoritesArray.map(obj => {
      // console.log('obj', obj.name)
      return obj.name
    })
    const place = newArray.indexOf(favorite.name)

    if(place === -1) {
      favoritesArray.push(favorite)
      // console.log('place:', place)
    }

    else if(place >= 0) {
      favoritesArray.splice(place, 1)
      // console.log('place:', place)
    }

    this.setState({
      favorites: favoritesArray,
      favoritesCount: favoritesArray.length
    })

    // console.log('favoritesCount', this.state.favoritesCount)
    console.log('favoritesArray', favoritesArray)
    console.log('favorite name:', favorite.name)

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
            <img className='logo' src={require('./star-wars-logo-dark-gray.svg')} alt='Star Wars'/>

            <Link to='/favorites'>
              <button className='favorites-btn'>
                View Favorites:
                <span className='favorites-count'>{this.state.favoritesCount}</span>
              </button>
            </Link>

            <NavBar />

          </header>

          <Route exact path='/' component={LandingPage} />

          <Route exact path='/people' render={({ match }) =>
            <People peopleList={this.state.people}
              handleFavorites={this.saveFavorite.bind(this)}
              favorites={this.state.favorites}
            />
          }/>

          <Route exact path='/planets' render={({ match }) =>
            <Planets  planetList={this.state.planets}
            handleFavorites={this.saveFavorite.bind(this)}
            />
          }/>

          <Route exact path='/vehicles' render={({ match }) =>
            <Vehicles vehicleList={this.state.vehicles}
            handleFavorites={this.saveFavorite.bind(this)}
            />
          }/>

          <Route exact path='/favorites' render={({ match }) =>
            <DisplayFavorites favorites={this.state.favorites}
            handleFavorites={this.saveFavorite.bind(this)}
            />
          }/>

        </div>
      </Router>
    )
  }
}
