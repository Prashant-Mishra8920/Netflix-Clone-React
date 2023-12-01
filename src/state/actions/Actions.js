

export const addMovies = (item) => {
    return (dispatch) => {
        dispatch({
            type: 'addMovies',
            payload: item
        })
    }
}

export const removeMovies = (item) => {
    return (dispatch) => {
        dispatch({
            type: 'removeMovies',
            payload: item
        })
    }
}


export const searchCompleted = (item) => {
    return (dispatch) => {
        dispatch({
            type: 'searchComplete',
            payload: item
        })
    }
}




