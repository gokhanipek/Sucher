import React from 'react';
import Search from '../Search/Search';
import Logo from './../Logo/Logo';

import './Home.scss';

const Home = () => {

    return (
        <div className="wrapper">
            <Logo />
            <Search />
        </div>
    )
}


export default Home;