import {gql} from "@apollo/client";

export const GET_REPOSES = gql`
    query getReposes($query:String!, $cursor:String!){
        search(first: 10, after:$cursor type:REPOSITORY, query:$query) {
            pageInfo {
                hasNextPage
                endCursor
            }
                nodes{
                ... on Repository {
                    id
                    name
                    stargazerCount
                    description
                    primaryLanguage{
                        name,
                        color
                    }
                    owner{
                        login
                    }
                }         
            }   
        }
    }
`