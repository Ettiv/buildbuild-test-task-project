import axios from "axios";
import {setReposes} from "../reducers/reposReducer";
import {GITHUB_URL} from "../constants/constants";
import Client from "../apolo/apoloClient.js";
import {gql} from "@apollo/client";

const github_data = {
    token: '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',
    username: 'Ettiv'
}

const config = {
    headers: {
        "Authorization": 'bearer ' + github_data.token
    }
}

export const getReposes = (searchQuery = 'stars:%3E1', currentPage, perPage) => {
    if (searchQuery == '') {
        searchQuery = 'stars:%3E1'
    }
    return async (dispatch) => {
        const responce = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`);
        dispatch(setReposes(responce.data));
    }
}

export const getRepose = async (username, reposname, setRepos) => {
    const response = await axios.get(`https://api.github.com/repos/${username}/${reposname}`);
    setRepos(response.data);
}