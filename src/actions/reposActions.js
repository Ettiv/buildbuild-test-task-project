import axios from "axios";
import {setReposes} from "../reducers/reposReducer"

const github_data = {
    token: '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',
    username: 'Ettiv'
}

const config = {
    headers: {
        "Authorization": 'bearer ' + github_data.token
     }
}

export const getReposes = (searchQuery = 'stars:%3E1' , currentPage, perPage) => {
    if (searchQuery == '') {
        searchQuery = 'stars:%3E1'
    }
    return async (dispatch) => {
        const responce = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`, config);
        dispatch(setReposes(responce.data));
    }
}