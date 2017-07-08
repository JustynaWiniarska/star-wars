const cleanPlanetData = (data) => {

  let planetData = [];
// console.log('planetData', planetData)
  planetData.push({
    name: data.name,
    terrain: data.terrain,
    population: data.population,
    climate: data.climate,
    residents: []

    // residents:
  })
  return planetData
}

export default cleanPlanetData;
