import { getBookByIDApi } from 'common/api/helpers';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getIdBook, setBook, setError, setLoading } from 'redux/reducer';
import { IDataBooks, IPropsAction } from 'types';

function* sagaGetBookByID(action: IPropsAction) {
	try {
		yield put(setLoading(true));
		const dataBooks: IDataBooks = yield call(getBookByIDApi, action.payload);
		yield put(setBook(dataBooks));
		yield put(setLoading(false));
	} catch {
		yield put(setError('Произошла ошибка загрузки данных'));
		yield put(setLoading(false));
	}
}

export function* sagaBookByIDWatcher() {
	yield takeEvery(getIdBook, sagaGetBookByID);
}
