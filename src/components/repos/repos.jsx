import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getRepose} from "../../actions/reposActions";

const Repos = () => {

    const[repos, setRepos] = useState({});
    const {username, reposname} = useParams();

    useEffect(()=>{
        getRepose(username,reposname,setRepos);
    }, []);

    return(
        <div className='repos'>
            <img src={repos.owner.avatar_url} alt='Avatar'/>
            <div className='repos-name'>
                {repos.name}
            </div>
            <div className='repos-stars'>
                {repos.stargazers_count}
            </div>
        </div>
    )
}

export default Repos;
