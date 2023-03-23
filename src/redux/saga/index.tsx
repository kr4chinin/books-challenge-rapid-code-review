import {
	getBookByIDApi,
	getBooksApi,
	getSortingBooksApi,
} from "common/api/helpers";
import { put, call, all, takeEvery } from "redux-saga/effects";
import {
	getBooks,
	getIdBook,
	getSortingBooks,
	setBook,
	setBooks,
	setError,
	setLoading,
	unSetLoading,
} from "redux/reducer";
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

function* sagaBooksWatcher() {
	yield takeEvery(getBooks, sagaGetBooks);
}

function* sagaGetSortingBooks(action: IPropsAction) {
	try {
		yield put(setLoading());
		const dataBooks: IDataBooks = yield call(
			getSortingBooksApi,
			action.payload,
		);
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

function* sagaBookByIDWatcher() {
	yield takeEvery(getIdBook, sagaGetBookByID);
}

export default function* rootSaga() {
	yield all([
		sagaBooksWatcher(),
		sagaSortingBooksWatcher(),
		sagaBookByIDWatcher(),
	]);
}
