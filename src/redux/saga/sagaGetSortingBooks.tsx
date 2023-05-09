import { call, put, takeEvery } from 'redux-saga/effects';
import {
  getSortingBooks,
	setBooks,
	setError,
	setLoading,
} from 'redux/reducer';
import { getSortingBooksApi } from 'common/api/helpers';

import { IDataBooks, IPropsAction } from './sagaGetBookByID';

function* sagaGetSortingBooks(action: IPropsAction) {
	try {
		yield put(setLoading(true));
		const dataBooks: IDataBooks = yield call(
			getSortingBooksApi,
			action.payload,
			);
			yield put(setBooks(dataBooks));
			yield put(setLoading(false));
		} catch {
			yield put(setError('Произошла ошибка загрузки данных'));
			yield put(setLoading(false));
	}
}

export function* sagaSortingBooksWatcher() {
	yield takeEvery(getSortingBooks, sagaGetSortingBooks);
}
