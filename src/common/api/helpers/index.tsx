import axios from "axios";
import { localString } from "types";
import { basicUrl } from "../constant";

export const getBooksApi = (queryParams:localString) => {
	const response = axios.get(`${basicUrl}?q=${queryParams}&maxResults=40`);
	return response;
};

export const getSortingBooksApi = (queryParams:localString) => {
	const response = axios.get(`${basicUrl}?q=${queryParams}&maxResults=40`);
	return response;
};

export const getBookByIDApi = (queryParams:localString) => {
	const response = axios.get(`${basicUrl}/${queryParams}`);
	return response;
};
