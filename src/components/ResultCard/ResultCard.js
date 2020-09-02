import React from 'react'
import './ResultCard.scss';

const ResultCard = ({item}) => {
    return (
        <div className="result-card-wrapper">
            <img className="result-card-image" src={item.owner.avatar_url} alt="avatar" />
            <div className="result-card-information">
                 <h2 className="repo-name">{item.name}
                    <span className="repo-owner">
                        <a href={item.owner.html_url} target="_blank" rel="noopener noreferrer">{item.owner.login}</a>
                    </span>
                    <span className="repo-fullname">
                        {item.full_name}
                    </span>
                </h2>
                 <p className="repo-language">{item.language}</p>
                 <p className="repo-stars">{item.stargazers_count}</p>
            </div>
            <a href={item.url} target="_blank" rel="noopener noreferrer">Go to link</a>
        </div>
    )
}

export default ResultCard
