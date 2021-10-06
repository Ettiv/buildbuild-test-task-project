import React from "react";
import './reposOnList.css';
import {NavLink} from "react-router-dom";

const ReposOnList = (props) => {
    const repos = props.repos;

    return(
        <div className='repos'>
            <div className="repos-header>">
                <div className="repos-header-name">
                    <NavLink to={`/repos/${repos.owner.login}/${repos.name}`}>
                        {repos.name}
                    </NavLink>
                </div>
                <div className="repos-header-stars">
                    {repos.stargazers_count}
                </div>
            </div>
            <div className='repos-last-commit'>
                {repos.updated_at}
            </div>
            <a href={repos.html_url} className='repos-link'>Ссылка на репозиторий: {repos.html_url}</a>
        </div>
    )
}

export default ReposOnList;