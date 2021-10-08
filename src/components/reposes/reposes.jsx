import ReposOnList from '../reposOnList/reposOnList.jsx';
import {GET_REPOSES} from "../../services/getReposes";
import {useQuery} from "@apollo/client";

function Reposes(props) {

    const {loading, data, fetchMore} = useQuery(GET_REPOSES, {
        variables: {
            query: props.searhValue,
            cursor: 'Y3Vyc29yOjA='
        }
    });

    if(loading){
        return <div>Звгрузка</div>;
    }

    console.log(data);

    const fethMoreButton =
        <div>
            <button onClick={() => {
                const endCursor = data.search.pageInfo.endCursor;
                console.log(endCursor);
                fetchMore({
                    variables: {
                        query: props.searhValue,
                        cursor: endCursor
                    },
                    updateQuery:(prevResult, {fetchMoreResult}) => {
                        fetchMoreResult.search.nodes = [
                            ...prevResult.search.nodes,
                            ...fetchMoreResult.search.nodes
                        ]
                        return fetchMoreResult;
                    }
                })
            }}>
                Загрузить ещё
            </button>
        </div>

    return (
        <>
            <div>
                {data.search.nodes.map(repos => <ReposOnList key={repos.id} repos={repos}/>)}
            </div>
            {data.search.pageInfo.hasNextPage ? fethMoreButton : null}
        </>
    );
}

export default Reposes;