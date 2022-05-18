import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {withRouter} from '../withRouter';
import Photo from './Photo';
import NotFound from './NotFound';

const Gallery = (props) => {

    
    let {query} = useParams();
    
    let queryValue;

    if (props.query) {
        queryValue = props.query;
    } else {
        queryValue = query;
    }

    useEffect(() => {
        props.handleSearch(queryValue);
    }, [queryValue]) // eslint-disable-line react-hooks/exhaustive-deps


    let photosArr;
    if (props.loading) {
        photosArr = <h1 className="loading">Loading...</h1>;
    } else {
        if (props.photos.length > 0) {
            photosArr = props.photos.map((photo, index) => 
                <Photo key={index} id={photo.id} secret={photo.secret} server={photo.server} alt={photo.title} />);
        } else {
            photosArr = <NotFound />;
        }
    }
    
    
    
    /* this.props.handleSearch(this.props.query); */
    return (
        <div className="photo-container">
            <h2>Results for {queryValue}</h2>
            <ul>
                    {photosArr}
            </ul>
        </div>
    )
    
    

}

export default withRouter(Gallery);