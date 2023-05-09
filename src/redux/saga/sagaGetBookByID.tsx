import { call, put, takeEvery } from 'redux-saga/effects';
import { setBook, setError, setLoading } from 'redux/reducer';
import { getBookByIDApi } from 'common/api/helpers';
import { IVolumeInfo } from 'pages/main/items/item';

export interface IPropsAction {
	action?: string;
	payload: string;
}

export interface IDataBooks {
	books: IDataBook;
}

export interface IDataBook {
	data: {
		kind: string;
		id: number;
		etag: string;
		selfLink: string;
		volumeInfo: IVolumeInfo;
	};
	id?: number;
}

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
	yield takeEvery('books/getIdBook', sagaGetBookByID);
}
