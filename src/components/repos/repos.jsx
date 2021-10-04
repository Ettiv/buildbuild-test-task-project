import React from "react";
import './repos.css';

const Repos = (props) => {
    const repos = props.repos;

    return(
        <div className='repos'>
            <div className="repos-header>">
                <div className="repos-header-name">
                    {repos.name}
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

export default Repos;