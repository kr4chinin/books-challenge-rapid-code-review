import { all } from "redux-saga/effects";
import { sagaBookByIDWatcher } from "./sagaGetBookByID";
import { sagaBooksWatcher } from "./sagaGetBooks";
import { sagaSortingBooksWatcher } from "./sagaGetSortingBooks";

export default function* rootSaga() {
	yield all([
		sagaBooksWatcher(),
		sagaSortingBooksWatcher(),
		sagaBookByIDWatcher(),
	]);
}
