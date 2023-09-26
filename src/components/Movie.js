import React, { Component } from 'react';
import '../styles/movie.scss'
class Movie extends Component {

    render() {
        const {title,poster,year,country}=this.props;
        return (
            <div className='movie'>
            <img src={poster} />
            <h3>{title}</h3>
            <h4>{year}</h4>
            <h4>{country}</h4>
            </div>
        );
    }
}

export default Movie;