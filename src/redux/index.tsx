import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';

import { booksReducer } from './reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		books: booksReducer,
	},
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
