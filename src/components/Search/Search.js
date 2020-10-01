import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { get } from 'lodash';
import ReactPaginate from 'react-paginate';
import { getSearchRepoRequest } from '../../redux/actions';
import Results from './../Results/Results';
import './Search.scss';
const Search = ({getSearchRepoRequest, searchResultsItems, searchResult}) => {
    
    const [ searchTerm, setSearchTerm ] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [results, setSearchResults] = useState([]);
    
    useEffect(() => {
        setSearchResults(searchResultsItems)
    }, [searchResultsItems]);
    

     const submitHandler = (e) => {
        e.preventDefault();
        const query = encodeURIComponent(searchTerm.trim());
        if (query === '') return;
        const searchParameters = {
            query,
            page: 1
        }
        getSearchRepoRequest(searchParameters);
    };

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    
    
    const paginate = e => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        const selectedPage = e.selected;
        setCurrentPage(selectedPage);
        const query = encodeURIComponent(searchTerm.trim());
        if (query === '') return;
        const searchParameters = {
            query,
            page: selectedPage + 1
        }
        getSearchRepoRequest(searchParameters);
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
                <Results searchResults={results} />
                {searchResult.total_count > currentPage*20 &&
                    <ReactPaginate
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={searchResult.total_count/20 > 50 ? 50 : searchResult.total_count/20}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={paginate}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
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
    getSearchRepoRequest: (query, currentPage) => dispatch(getSearchRepoRequest(query, currentPage))
})
const mapStateToProps = ({data}) => ({ 
    searchResultsItems: get(data, 'searchResults.items', []),
    searchResult: get(data, 'searchResults', {})
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);