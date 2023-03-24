import { getSortingBooksApi } from "common/api/helpers";
import { call, put, takeEvery } from "redux-saga/effects";
import {
	getSortingBooks,
	setBooks,
	setError,
	setLoading,
	unSetLoading,
} from "redux/reducer";
import { IDataBooks, IPropsAction } from "types";

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

export function* sagaSortingBooksWatcher() {
	yield takeEvery(getSortingBooks, sagaGetSortingBooks);
}
