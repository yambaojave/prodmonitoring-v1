import axios from "axios";
import { BASE_API_URL, SESSION_TOKEN } from "../data/constants";
import { getSessionData } from "../utils/helpers";

const BASE_API_URL_HEADER = `${BASE_API_URL}/header`

export const checkDataProvider = async (token) => {
    try{
        const config = {
            headers : { Authorization : token }
        }
        const response = await axios.get(`${BASE_API_URL_HEADER}/dataprovider`, config);
        return response.data;
    }
    catch(err){
        console.log('checkDataProvider: ' + err);
        throw err;
    }
}

export const setWorkGroupId = async (headerId) => {
    try{
        const response = await axios.get(`${BASE_API_URL_HEADER}/${headerId}`);
        return response.data;
    }
    catch(err){
        console.log('setWorkGroupId: ' + err);
        throw err;
    }
}

export const postDataProvider = async (headerId) => {
    try{
        const token = getSessionData(SESSION_TOKEN);
        const config = {
            headers : { Authorization : token }
        }
        const response = await axios.post(`${BASE_API_URL_HEADER}/dataprovider/${headerId}`, "", config);
        return response.data;
    }
    catch(err){
        console.log('postDataProvider: ' + err);
        throw err;
    }

}


export const checkLatestWorkgroupModel = async (workGroupId) => {
    try{
        const token = getSessionData(SESSION_TOKEN);
        const config = {
            headers : { Authorization : token }
        }
        const response = await axios.get(`${BASE_API_URL_HEADER}/model/${workGroupId}`, config);
        return response.data;
    }
    catch(err){
        console.log('postDataProvider: ' + err);
        throw err;
    }
}

export const PostHeader = async (workGroupId, model) => {
    try{
        const token = getSessionData(SESSION_TOKEN);
        const payload = {
            "WorkGroupId": workGroupId,
            "Model": model
        }
        const config = {
            headers : { Authorization : token }
        }
        const response = await axios.post(`${BASE_API_URL_HEADER}`, payload, config);
        return response.data;
    }
    catch(err){
        console.log('postHeader: ' + err);
        throw err;
    }
}

export const UpdateHeader = async (headerId) => {
    try{
        const token = getSessionData(SESSION_TOKEN);
        const config = {
            headers : { Authorization : token }
        }
        const response = await axios.put(`${BASE_API_URL_HEADER}/${headerId}`, "", config);
        return response;
    }
    catch(err){
        console.log('updateHeader: ' + err);
        throw err;
    }
}
