export const cleanFilmData = (movieData) => {
  return {
    crawl: movieData.opening_crawl,
    title: movieData.title,
    date: movieData.release_date
  }
}
