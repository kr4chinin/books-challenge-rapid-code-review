import axios from 'axios';

import { basicUrl } from '../constant';

export const getBooksApi = (queryParams: string) => {
	const response = axios.get(`${basicUrl}?q=${queryParams}&maxResults=40`);
	return response;
};

export const getSortingBooksApi = (queryParams: string) => {
	const response = axios.get(`${basicUrl}?q=${queryParams}&maxResults=40`);
	return response;
};

export const getBookByIDApi = (queryParams: string) => {
	const response = axios.get(`${basicUrl}/${queryParams}`);
	return response;
};
