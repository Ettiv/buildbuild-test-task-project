import {
    ApolloClient,
    InMemoryCache,
    createHttpLink
} from "@apollo/client";

import {setContext} from "@apollo/client/link/context";

import {GITHUB_URL} from "../constants/constants";
import {token} from '../constants/token.js'

const httpLink = createHttpLink({
    uri: GITHUB_URL,
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

export  default new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});