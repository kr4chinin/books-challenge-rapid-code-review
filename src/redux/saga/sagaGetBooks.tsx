import { getBooksApi } from "common/api/helpers";
import { call, put, takeEvery } from "redux-saga/effects";
import { getBooks, setBooks, setError, setLoading, unSetLoading } from "redux/reducer";
import { IDataBooks, IPropsAction } from "types";

function* sagaGetBooks(action: IPropsAction) {
	try {
		yield put(setLoading());
		const dataBooks: IDataBooks = yield call(getBooksApi, action.payload);
		yield put(setBooks(dataBooks));
		yield put(unSetLoading());
	} catch {
		yield put(setError("Произошла ошибка загрузки данных"));
		yield put(unSetLoading());
	}
}

export function* sagaBooksWatcher() {
	yield takeEvery(getBooks, sagaGetBooks);
}
