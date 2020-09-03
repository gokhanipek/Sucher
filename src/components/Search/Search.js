import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { get } from 'lodash';
import { getSearchRepoRequest } from '../../redux/actions';
import Results from './../Results/Results';
import Pagination from './Pagination';
import './Search.scss';
const Search = ({getSearchRepoRequest, searchResultsItems, searchResult}) => {
    
    const [ searchTerm, setSearchTerm ] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage] = useState(25);
    const [results, setSearchResults] = useState([]);
    
    useEffect(() => {
        setSearchResults(searchResultsItems)
    }, [searchResultsItems]);
    

    const indexOfLastItem = currentPage * resultsPerPage;
    const indexOfFirstItem = indexOfLastItem - resultsPerPage;
    const currentItems = results.slice(indexOfFirstItem, indexOfLastItem);
    const submitHandler = (e) => {
        e.preventDefault();
        const query = encodeURIComponent(searchTerm.trim());
        if (query === '') return;
        getSearchRepoRequest(query);
    };

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    };
    
    return (
        <div className="row">
            <form className="col s12 m8 l6 offset-m2 offset-l3 form-container" onSubmit={submitHandler}>
                <div className="row">
                    <div className="input-field col s12 form-input-container">
                        <input placeholder="Type a repo name..." id="first_name" type="text" className="validate" onChange={handleChange} />
                        <button className="btn form-button" type="submit" name="action"> Search
                            <i className="material-icons right white-text">send</i>
                        </button>
                    </div>
                </div>
                <Results searchResults={currentItems} />
                {results.length > 25 &&
                    <Pagination
                        postsPerPage={resultsPerPage}
                        totalPosts={results.length}
                        paginate={paginate}
                    />
                }
                { searchResult.items && results.length === 0 && 
                    <p>No results</p>
                }
            </form>
        </div>
    )
}
const mapDispatchToProps = dispatch =>({
    getSearchRepoRequest: (data) => dispatch(getSearchRepoRequest(data))
})
const mapStateToProps = ({data}) => ({ 
    searchResultsItems: get(data, 'searchResults.items', []),
    searchResult: get(data, 'searchResults', {})
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);