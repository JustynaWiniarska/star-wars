const toggleFavorites = (favorite, main) => {

  const favoritesArray = main.state.favorites
  const newArray = favoritesArray.map(obj => obj.name )
  const place = newArray.indexOf(favorite.name)

  if(place === -1) {
    favoritesArray.push(favorite)
  }

  else if(place >= 0) {
    favoritesArray.splice(place, 1)
  }

  const favsInState = JSON.stringify(main.state.favorites)
  localStorage.setItem('storedFavorites', favsInState);

  main.setState({
    favorites: favoritesArray,
    favoritesCount: favoritesArray.length
  })
}

export default toggleFavorites;
