import { getBookByIDApi, getBooksApi, getSortingBooksApi } from "common/api/helpers";
import { put, call, all, takeEvery } from "redux-saga/effects";
import { getBooks, getIdBook, getSortingBooks, setBooks, setError, setLoading, unSetLoading } from "redux/reducer";
import { IDataBooks } from "types";

function* sagaGetBooks(action:any) {
	try {
		yield put(setLoading());
		const dataBooks:IDataBooks = yield call(getBooksApi, action.payload);
		console.log('dataBooks', dataBooks)
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

function* sagaGetSortingBooks(action:any) {
	try {
		
		yield put(setLoading());
		const dataBooks:IDataBooks = yield call(getSortingBooksApi,  action.payload);
		yield put(setBooks(dataBooks));
		yield put(unSetLoading());
	} catch {
		yield put(setError("Произошла ошибка загрузки данных"));
		yield put(unSetLoading());
	}
}

function* sagaSortingBooksWatcher() {
	yield takeEvery(getSortingBooks, sagaGetSortingBooks);
}


function* sagaGetBookByID(action:any) {
	try {
		console.log('start a saga')
		yield put(setLoading());
		const dataBooks:IDataBooks = yield call(getBookByIDApi,  action.payload);
		yield put(setBooks(dataBooks));
		yield put(unSetLoading());
	} catch {
		yield put(setError("Произошла ошибка загрузки данных"));
		yield put(unSetLoading());
	}
}

function* sagaBookByIDWatcher() {
	yield takeEvery(getIdBook, sagaGetBookByID);
}

export default function* rootSaga() {
	yield all([sagaBooksWatcher(), sagaSortingBooksWatcher(), sagaBookByIDWatcher()]);
}
