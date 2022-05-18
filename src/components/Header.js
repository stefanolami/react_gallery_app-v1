import React from 'react';
import {Route, Routes} from 'react-router-dom';

import SearchLink from './SearchLink';
import SearchForm2 from './SearchForm2';

const Header = (props) => {

    let searchElement;
    if (props.search) {
        searchElement = <SearchForm2 updateQuery={props.updateQuery} handleSearch={props.handleSearch} query={props.query}/>
    } else {
        searchElement = <SearchLink showSearchBar={props.showSearchBar}/>
    }


    return (
        <div>
            {/* <Routes>
                <Route to="/" element={<SearchLink />} />
                <Route to="/search" element={<SearchForm />} />
            </Routes> */}
            {searchElement}
        </div>
        
    )
}

export default Header;

