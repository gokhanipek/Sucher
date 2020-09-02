import React, { useEffect } from 'react'
import { connect } from "react-redux";

import { getSearchRepoRequest } from './../redux/actions';

const Home = ({getSearchRepoRequest}) => {
    useEffect(() => {
        getSearchRepoRequest();
    })
    return (
        <div>
            hello
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    getSearchRepoRequest: () => dispatch(getSearchRepoRequest())
})
const mapStateToProps = state => ({ 
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);
  
  