const initialState = {
    movies: [],
    searchComplete: false,
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addMovies': return state.movies.find((movie)=> movie.id === action.payload.id) ? state : {movies: [...state.movies,action.payload]} 
        case 'removeMovies': return {movies: state.movies.filter((movie)=>movie.id !== action.payload.id)}
            // return {movies: [...state.movies, action.payload]}
        case 'searchComplete': return action
        default: return state
    }
}

export default movieReducer