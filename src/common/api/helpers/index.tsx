import axios from "axios"
import { basicUrl } from "../constant"




export const getBooksApi = () =>{
const response = axios.get(basicUrl)
console.log('response in function', response)
}