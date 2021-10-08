import {useParams} from 'react-router-dom';
import {useQuery} from "@apollo/client";
import {GET_REPOSE} from "../../services/getRepose"
import './repos.css'

const Repos = (props) => {

    const {username, reposname} = useParams();
    const {loading,data} = useQuery( GET_REPOSE , {
        variables: {
            name: reposname,
            owner: username
        }
    });

    if(loading){
        return null;
    }

    let languages = (data.repository.languages.nodes || []);

    console.log(data);

    return(
        <div className='repos'>
            <div className='repos-close-button-container'>
                <div className='repos-close-button' onClick={() => {
                    props.history.goBack();
                }}>
                    X
                </div>
            </div>
            <div className='repos-pull-requests-count'>
                Колличество пул-реквестов: {data.repository.pullRequests.totalCount}
            </div>
            <div className='repos-issues-count'>
                Колличество ишью: {data.repository.issues.totalCount}
            </div>
            <div className='repos-list-of-languages'>
                {languages.map( language =>{
                    return(
                        <div className='repos-language' key={data.repository.id}>
                            <div
                                className='repos-language-color'
                                style={{backgroundColor: language.color}}
                            />
                            <div className='repos-language-text'>
                                {language.name}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Repos;
