import React, { useState } from 'react'
import { connect } from "react-redux";
import { get } from 'lodash';
import { getSearchRepoRequest } from '../../redux/actions';
import ResultCard from '../ResultCard/ResultCard';


const Search = ({getSearchRepoRequest, searchResults}) => {
    const [ searchTerm, setSearchTerm ] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        const query = encodeURIComponent(searchTerm.trim());
        if (query === '') return;
        getSearchRepoRequest(query);
    }

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };



    return (
        <div className="row">
            <form onSubmit={submitHandler}>
                <div className="input-field col s6">
                <input placeholder="Type a repo name..." id="first_name" type="text" className="validate" onChange={handleChange} />
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">
                    <i className="material-icons right">send</i>
                </button>
            </form>
            {searchResults.map(item => <ResultCard item={item} />)}
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    getSearchRepoRequest: (data) => dispatch(getSearchRepoRequest(data))
})

const mapStateToProps = ({data}) => ({ 
    searchResults: get(data, 'searchResults.items', [])
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);