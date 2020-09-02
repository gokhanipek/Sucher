import React, { useState } from 'react'
import { connect } from "react-redux";
import { get } from 'lodash';
import { getSearchRepoRequest } from '../../redux/actions';


const Search = ({getSearchRepoRequest, searchResults}) => {
    console.warn(searchResults);
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
        <div class="row">
            <form onSubmit={submitHandler}>
                <div class="input-field col s6">
                <input placeholder="Placeholder" id="first_name" type="text" class="validate" onChange={handleChange} />
                <label for="first_name">First Name</label>
                </div>
                <button class="btn waves-effect waves-light" type="submit" name="action">
                    <i class="material-icons right">send</i>
                </button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    getSearchRepoRequest: () => dispatch(getSearchRepoRequest())
})

const mapStateToProps = ({data}) => ({ 
    searchResults: get(data, 'searchResults.items', [])
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);