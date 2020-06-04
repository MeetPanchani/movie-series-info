import { SEARCH_MOVIE, FETCH_MOVIE, FETCH_MOVIE_DETAILS, LOADING } from './types'
import axios from 'axios'
import { APIKey } from '../APIKey'

export const searchMovie = (text) => {
    return (dispatch) => {
        dispatch({
            type: SEARCH_MOVIE,
            payload: text
        })
    }
}

export const fetchMovie = (text) => {
    return (dispatch) => {
        axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
            .then(response => dispatch({
                type: FETCH_MOVIE,
                payload: response.data
            }))
            .catch(err => console.log(err))
    }
}

export const fetchMovieDetails = (id) => {
    return (dispatch) => {
        axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
            .then(response => dispatch({
                type: FETCH_MOVIE_DETAILS,
                payload: response.data
            }))
            .catch(err => console.log(err))
    }
}

export const setLoading = () => {
    return {
        type: LOADING
    }
}
