import axios from "axios";
import { basicUrl } from "../constant";

export const getBooksApi = (action: any) => {
	const response = axios.get(`${basicUrl}?q=${action}&maxResults=40`);
	return response;
};

export const getSortingBooksApi = (action: any) => {
	const response = axios.get(`${basicUrl}?q=${action}&maxResults=40`);
	return response;
};

export const getBookByIDApi = (action: any) => {
	console.log('response in last function')
	const response = axios.get(`${basicUrl}/${action}`);
	console.log('response in last function', response)
	return response;
};

