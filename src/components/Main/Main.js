import React, { Component } from 'react';
import './Main.css'

import People from '../People/People';
import Planets from '../Planets/Planets';

import cleanPlanetData from '../Planets/cleanPlanetData'
import callPeople from '../helperFunctions/callPeople'

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
    this.fetchPlanets()
  }




  fetchPlanets() {
    if(!this.state.planets.length){
      fetch('http://swapi.co/api/planets/')
      .then(res => res.json())
      .then(data => {

        const residentsArr = data.results.map(planet => {

  // console.log('i.residents', i.residents)
  // console.log('data.results[i]', data.results[i])
          const residents = planet.residents.map(call =>
    // console.log('call', call)
          fetch(call)
          .then(resp => resp.json())
          .then(value => {
  // console.log('value:', value.name)
            return value.name
            })
          )

// console.log('residents', residents)
          return Promise.all(residents)
          .then(values => {
            // console.log('values', values)
            return Object.assign(planet, {residents: values})
          })
        })
        return Promise.all(residentsArr)
      })
        .then(value => {
          this.setState({planets: value})
        })
      }
  }


  fetchVehicles(){

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
