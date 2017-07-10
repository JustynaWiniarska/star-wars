const callPlanets = (page, main) => {

  fetch(`http://swapi.co/api/${page}/`)
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

  .then(value =>
    main.setState({planets: value})
  )

}

export default callPlanets;
