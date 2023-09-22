import axios from "axios";
import { BASE_API_URL, SESSION_TOKEN } from "../data/constants";
import { getSessionData } from "../utils/helpers";

const BASE_API_URL_HEADER = `${BASE_API_URL}/machine`

export const PostMachine = async (headerId) => {
    try{
        const token = getSessionData(SESSION_TOKEN);
        const config = {
            headers : { Authorization : token }
        }
        const response = await axios.post(`${BASE_API_URL_HEADER}/${headerId}`, "", config);
        return response;
    }
    catch(err){
        console.error('PostMan: ' + err);
        throw err;
    }
}