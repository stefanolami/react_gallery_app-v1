import React from 'react';

import SearchLink from './SearchLink';
import SearchForm from './SearchForm';

const Header = (props) => {

    /** 
     * Evaluates the search prop and show the searchBar or searchLink depending on that
     */
    let searchElement;
    if (props.search) {
        searchElement = <SearchForm updateQuery={props.updateQuery} handleSearch={props.handleSearch} query={props.query}/>
    } else {
        searchElement = <SearchLink showSearchBar={props.showSearchBar}/>
    }

    return (
        <div>
            {searchElement}
        </div>
    )
}

export default Header;