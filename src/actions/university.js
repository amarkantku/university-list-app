import {
    GET_UNIVERSITIES_LIST,
    GET_UNIVERSITIES_SUCCESS,
    GET_UNIVERSITIES_FAIL,
    SHOW_LODER,
    HIDE_LODER,
    SET_PAGINATION_META_DATA,
    GET_UNIVERSITY_DETAILS,
    SET_UNIVERSITY_DETAILS,
    RESET_STORE
} from '../actionTypes/university';


export const getUniversityList = searchTerm => ({
    type: GET_UNIVERSITIES_LIST,
    payload: {
        searchTerm
    }
});

export const setUniversityList = (payload) => ({
    type: GET_UNIVERSITIES_SUCCESS,
    payload
});

export const setErrorGetUniversityList = (errors) => ({
    type: GET_UNIVERSITIES_FAIL,
    payload: {
        errors
    }
});

export const getUniversityDetails = name => ({
    type: GET_UNIVERSITY_DETAILS,
    payload: {
        name
    }
});

export const setUniversityDetails = payload => ({
    type: SET_UNIVERSITY_DETAILS,
    payload
});



export const showLoder = () => ({
    type: SHOW_LODER,
    payload: {
        loading: true
    }
})

export const hideLoder = () => ({
    type: HIDE_LODER,
    payload: {
        loading: false
    }
})


export const setPaginationMetaData =(meta) => ({
    type: SET_PAGINATION_META_DATA,
    payload: {
        meta
    }
})

export const resetStore = () => ({
    type: RESET_STORE
})