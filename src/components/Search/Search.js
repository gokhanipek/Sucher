    import React, { useState } from 'react'
    import { connect } from "react-redux";
    import { get } from 'lodash';
    import { getSearchRepoRequest } from '../../redux/actions';
    import ResultCard from '../ResultCard/ResultCard';

    import './Search.scss';


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
                <form className="col s12 m8 l6 offset-m2 offset-l3 form-container" onSubmit={submitHandler}>
                    <div className="row">
                        <div className="input-field col s12 form-input-container">
                            <input placeholder="Type a repo name..." id="first_name" type="text" className="validate" onChange={handleChange} />
                            <button className="btn form-button" type="submit" name="action"> Search
                                <i className="material-icons right white-text">send</i>
                            </button>
                        </div>
                    </div>                    
                    {searchResults.map(item => <ResultCard key={item.id} item={item} />)}
                </form>
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