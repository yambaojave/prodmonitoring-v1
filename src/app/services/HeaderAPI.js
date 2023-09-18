import { BASE_API_URL } from "../data/constants";

const BASE_API_URL_HEADER = `${BASE_API_URL}/header`

export const fetchLatestWorkgroup = async (line) => {
    try{
        // const getLine = sessionStorage.getItem("LINE"); // TODO: to be change, getting of should be done in authentication
        const response = await fetch(`${BASE_API_URL_HEADER}/workgroup/${line}`);
        const data = await response.json();

        return data;
    }
    catch(err){
        console.log(err)
    }
    

}