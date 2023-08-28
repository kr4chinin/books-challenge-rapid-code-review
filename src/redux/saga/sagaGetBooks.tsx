import { call, put, takeEvery } from 'redux-saga/effects';
import { setBooks, setError, setLoading } from 'redux/reducer';
import { getBooksApi } from 'common/api/helpers';

import { IDataBooks, IPropsAction } from './sagaGetBookByID';

function* sagaGetBooks(action: IPropsAction) {
  try {
    yield put(setLoading(true));
    const dataBooks: IDataBooks = yield call(getBooksApi, action.payload);
    yield put(setBooks(dataBooks));
    yield put(setLoading(false));
  } catch {
    yield put(setError('Произошла ошибка загрузки данных'));
    yield put(setLoading(false));
  }
}

export function* sagaBooksWatcher() {
  yield takeEvery('books/getBooks', sagaGetBooks);
}
