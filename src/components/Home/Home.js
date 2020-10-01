import React from 'react';
import { connect } from "react-redux";
import { get } from 'lodash';

import Search from '../Search/Search';
import Logo from './../Logo/Logo';

import './Home.scss';

const Home = ({searchResults}) => {
    return (
        <div className={`wrapper ${searchResults.length > 0 ? 'top' : ''}`} wrapper>
            <div className="container">
                <Logo />
                <Search />
            </div>
        </div>
    )
}

const mapStateToProps = ({data}) => ({ 
    searchResults: get(data, 'searchResults.items', [])
});
export default connect(mapStateToProps, null)(Home);