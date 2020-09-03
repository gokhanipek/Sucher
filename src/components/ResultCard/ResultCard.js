import React from 'react'
import './ResultCard.scss';

const ResultCard = ({item}) => {
    return (
        <div className="result-card-wrapper">
            <img className="result-card-image" src={item.owner.avatar_url} alt="avatar" />
            <div className="result-card-information">
                 <h2 className="repo-name">{item.name}
                    <span className="repo-owner">
                        <a className="teal-text" href={item.owner.html_url} target="_blank" rel="noopener noreferrer">{item.owner.login}</a> - {item.full_name}
                    </span>
                </h2>
                <div className="repo-card-bottom-info">
                    <p className="repo-stars"><i class="material-icons yellow-text">star</i>{item.stargazers_count}</p>
                    <p className="repo-language">{item.language}</p>
                </div>
            </div>
            <a className="btn result-card-link" href={item.svn_url} target="_blank" rel="noopener noreferrer">Go to link</a>
        </div>
    )
}

export default ResultCard
