import React from "react";

const SearchLink = (props) => {
    return (
        <nav className="main-nav">
            <ul>
                <li className="searchBtn" onClick={props.showSearchBar}>Search</li>
            </ul>
        </nav>
    );
}

export default SearchLink;