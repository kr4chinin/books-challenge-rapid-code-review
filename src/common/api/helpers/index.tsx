import axios from "axios"
import { basicUrl } from "../constant"




export const getBooksApi = (action:any) =>{
   console.log('action in function', action)
const response = axios.get(`${basicUrl}?q=${action}&maxResults=40`)
//@ts-ignore
console.log('response in function', response)
return response
}