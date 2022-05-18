import React from "react";
import {Link} from 'react-router-dom';

const SearchLink = (props) => {
    return (
        <nav className="main-nav">
            <ul>
                {/* <li><Link to='/search' onClick={props.showSearchBar}>Search</Link></li> */}
                <li className="searchBtn" onClick={props.showSearchBar}>Search</li>
            </ul>
        </nav>
    );
}

export default SearchLink;