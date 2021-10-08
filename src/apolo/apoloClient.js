import {
    ApolloClient,
    InMemoryCache,
    createHttpLink
} from "@apollo/client";

import {setContext} from "@apollo/client/link/context";

import {GITHUB_URL} from "../constants/constants";

const httpLink = createHttpLink({
    uri: GITHUB_URL,
});

const authLink = setContext((_, { headers }) => {
    const token = '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';
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