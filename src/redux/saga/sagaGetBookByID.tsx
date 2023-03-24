import { getBookByIDApi } from "common/api/helpers";
import { call, put, takeEvery } from "redux-saga/effects";
import {
	getIdBook,
	setBook,
	setError,
	setLoading,
	unSetLoading,
} from "redux/reducer";
import { IDataBooks, IPropsAction } from "types";

function* sagaGetBookByID(action: IPropsAction) {
	try {
		yield put(setLoading());
		const dataBooks: IDataBooks = yield call(getBookByIDApi, action.payload);
		yield put(setBook(dataBooks));
		yield put(unSetLoading());
	} catch {
		yield put(setError("Произошла ошибка загрузки данных"));
		yield put(unSetLoading());
	}
}

export function* sagaBookByIDWatcher() {
	yield takeEvery(getIdBook, sagaGetBookByID);
}
