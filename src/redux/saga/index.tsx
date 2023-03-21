import { getBooksApi } from "common/api/helpers";
import { put, call, all, takeEvery } from "redux-saga/effects";
import { getBooks, setBooks, setError, setLoading, unSetLoading } from "redux/reducer";
import { IDataBooks } from "types";

function* sagaGetBooks(action:any) {
	try {
		yield put(setLoading());
		const dataBooks:IDataBooks = yield call(getBooksApi, action.payload);
		yield put(setBooks(dataBooks));
		yield put(unSetLoading());
	} catch {
		yield put(setError("Произошла ошибка загрузки данных"));
		yield put(unSetLoading());
	}
}

function* sagaBooksWatcher() {
	yield takeEvery(getBooks, sagaGetBooks);
}

export default function* rootSaga() {
	yield all([sagaBooksWatcher()]);
}
