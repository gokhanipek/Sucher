import React from 'react'
import ResultCard from '../ResultCard/ResultCard';

const Results = ({searchResults}) => {
    return (
        <div className="row">
            {searchResults.map(item => <ResultCard key={item.id} item={item} />)}
        </div>   
    )
}

export default Results
