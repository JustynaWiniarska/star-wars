const callVehicles = (page, main) => {

  fetch(`http://swapi.co/api/${page}/`)
    .then(res => res.json())
    .then(data => {
      main.setState({vehicles: data.results})
  })
  
}

export default callVehicles;
