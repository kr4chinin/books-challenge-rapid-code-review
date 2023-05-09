import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import rootSaga from './saga';
import { booksReducer } from './reducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		books: booksReducer,
	},
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
export default store;


