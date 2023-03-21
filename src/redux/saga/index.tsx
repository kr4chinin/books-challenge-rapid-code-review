import { getBooksApi } from "common/api/helpers";
import { put, call, all, takeEvery } from "redux-saga/effects";
import { getBooks, setBooks, setError, setLoading, unSetLoading } from "redux/reducer";
import { IDataBooks } from "types";

function* sagaGetBooks(action:any) {
	try {
		console.log('action in saga', action.payload)
		console.log('common baby, let s start a saga')
		yield put(setLoading());
		const dataBooks:IDataBooks = yield call(getBooksApi, action.payload);
		console.log('hm, can i get a data from books shop?', dataBooks)
		yield put(setBooks(dataBooks));
		console.log('i think a data already in state')
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
