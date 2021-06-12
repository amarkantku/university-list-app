import { all, put, takeLatest } from 'redux-saga/effects';
import sortBy from 'lodash/sortBy';
import UniversityApi from '../interfaces/UniversityApi';
import { GET_UNIVERSITIES_LIST, GET_UNIVERSITY_DETAILS } from '../actionTypes/university';
import { setUniversityList, setUniversityDetails, setErrorGetUniversityList, showLoder, hideLoder } from '../actions/university';

export function* getUniversityListSaga(action) {
    try {
        yield put(showLoder());
        let response = yield UniversityApi.getUniversities(action.payload.searchTerm);
        if(response.length === 0) {
            response = yield UniversityApi.getUniversityDetails(action.payload.searchTerm);
        }
        response = sortBy(response, ['name'])
        response = response.map((university, index) => {
            university.id = index;
            return university;
        });
       
        yield put(setUniversityList(response))
    } catch (errors) {
        yield put(setErrorGetUniversityList(errors))
    } finally {
        yield put(hideLoder());
    }
}

export function* getUniversityDetailsSaga(action) {
    try {
        yield put(showLoder());
        let response = yield UniversityApi.getUniversityDetails(action.payload.name);
        yield put(setUniversityDetails(response[0]))
    } catch (errors) {
        yield put(setErrorGetUniversityList(errors))
    } finally {
        yield put(hideLoder());
    }
}

export default function* root() {
    yield all([
        takeLatest(GET_UNIVERSITIES_LIST, getUniversityListSaga),
        takeLatest(GET_UNIVERSITY_DETAILS, getUniversityDetailsSaga),
    ]);
}
