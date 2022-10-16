const baseURL = 'https://api.themoviedb.org/3';

const urls={
    movies: `${baseURL}/discover/movie`,
    genres: `${baseURL}/genre/movie/list`,
    movie: `${baseURL}/movie`,
    searchMovie: `${baseURL}//search/movie`
}

export {
    baseURL,
    urls
}