import {
    GET_UNIVERSITIES_SUCCESS,
    GET_UNIVERSITIES_FAIL,
    SHOW_LODER,
    HIDE_LODER,
    SET_PAGINATION_META_DATA,
    SET_UNIVERSITY_DETAILS,
    RESET_STORE
} from '../actionTypes/university';

const pageSize =20;
const initialState = {
    universityList: [],
    isLoading: false,
    errors: {},
    universityInfo: {},
    pagination: {
        meta: {
            currentPage: 1,
            endIndex: 1,
            endPage: 1,
            initialPage: 1,
            startPage: 1,
            pageSize: pageSize,
            pages: [],
            startIndex: 1,
            totalPages: 1,
            totalRecords: 0,
        },
        data: [],
    }
};
export default function university(state = initialState, action) {
    switch (action.type) {
        case GET_UNIVERSITIES_SUCCESS:
            return {
                ...state,
                universityList: action.payload,
                pagination: {
                    ...state.pagination,
                    meta: {
                        ...state.pagination.meta,
                        totalRecords: action.payload.length || 0,
                    }
                },
            }
        case GET_UNIVERSITIES_FAIL:
            return {
                ...state,
                errors: action.payload.errors
            }
        case SET_UNIVERSITY_DETAILS:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                },
                universityInfo: action.payload
            }
        case SHOW_LODER:
            return {
                ...state,
                isLoading: action.payload.loading
            }
        case HIDE_LODER:
            return {
                ...state,
                isLoading: action.payload.loading
            }
        case SET_PAGINATION_META_DATA:
            state =  {
                ...state,
                pagination: {
                    ...state.pagination,
                    meta: action.payload.meta,
                    data: state.universityList.slice(action.payload.meta.startIndex, action.payload.meta.endIndex + 1)
                }
            }
            return state;
        case RESET_STORE:
            return {
                ...initialState
            }
        default:
            return state;
    }
};
