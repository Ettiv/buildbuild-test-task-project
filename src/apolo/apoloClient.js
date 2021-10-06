import {
    ApolloClient,
    InMemoryCache
} from "@apollo/client";

import {GITHUB_URL} from "../constants/constants";

export  default new ApolloClient({
    uri: GITHUB_URL,
    cache: new InMemoryCache()
});