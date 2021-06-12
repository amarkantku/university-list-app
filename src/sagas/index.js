import { fork, all } from 'redux-saga/effects';
import UniversitySaga from './UniversitySaga';

export default function* rootSaga() {
    yield all([
        fork(UniversitySaga),
    ])
}