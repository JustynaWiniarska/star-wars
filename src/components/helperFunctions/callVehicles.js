const callVehicles = (page, main) => {

  fetch(`http://swapi.co/api/${page}/`)
  .then(res => res.json())
  .then(data => {
    main.setState({vehicles: data.results})
  })
  .catch(error => console.log('error fetching vehicles:', error))
}

export default callVehicles;
