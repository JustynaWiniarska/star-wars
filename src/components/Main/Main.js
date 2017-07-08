import React, { Component } from 'react';
import './Main.css'

import People from '../People/People';
import Planets from '../Planets/Planets';

import cleanPlanetData from '../Planets/cleanPlanetData'

export default class Main extends Component {
  constructor() {
    super()
    this.state={
      people:[],
      planets: [],
    }
  }
  // console.log('state:', this.state.people)

  componentDidMount(){
    this.fetchPeople(),
    this.fetchPlanets()
  }

  fetchPeople() {
    fetch('http://swapi.co/api/people/')
    .then(res => res.json())
    .then(data => {
      // console.log('data', data.results)

    const homeworld = data.results.map(i =>
      fetch(i.homeworld)
      .then(res => res.json())
      .then(home => {
        return home.name
      })
    )

    const species = data.results.map(i =>
      fetch(i.species)
      .then(res => res.json())
      .then(spec => {
        // console.log('home:', spec)
        return spec.name
      })
    )

    const population = data.results.map(i =>
      fetch(i.homeworld)
      .then(res => res.json())
      .then(popul => {
        return popul.population
      })
    )

    Promise.all(homeworld)
      .then(callback => {
        return callback.map((home, i) => {
          return Object.assign(data.results[i], {homeworld: home})
        })
      })

    Promise.all(species)
      .then(callback => {
        return callback.map((spec, i) => {
          return Object.assign(data.results[i], {species: spec})
        })
      })

    Promise.all(population)
      .then(callback => {
        // console.log('callback pop:', callback)
        return callback.map((pop, i) => {
          return Object.assign(data.results[i], {population: pop})
        })
      })

      .then(value => {
        this.setState({people: value})
      })

    })
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

    

console.log('residents', residents)

          return Promise.all(residents)
          .then(values => {
            console.log('values', values)

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




  render() {
    console.log('planets state', this.state.planets)
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
