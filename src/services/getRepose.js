import {gql} from "@apollo/client";

export const GET_REPOSE = gql`
    query getRepos($name:String!, $owner:String!){
        repository(name:$name , owner:$owner){
            id
            pullRequests{
                totalCount
            }
            issues{
                totalCount
            }
            languages(first:100){
                nodes{
                    color
                    name
                }
            }
        }        
    }
`