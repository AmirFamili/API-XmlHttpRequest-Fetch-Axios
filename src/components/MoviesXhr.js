import React, { Component } from 'react';
import Movie from './Movie'
import '../styles/movies.scss'
class MoviesXhr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        }
    }

    requestData = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://moviesapi.ir/api/v1/movies', true);
        xhr.onload = () => {
            if (xhr.status === 200) {
                const data = xhr.response;
                const movies = JSON.parse(data);
                this.setState({
                    movies: movies.data

                })


            }
        };
        xhr.send(null);
    };
componentDidMount(){
    this.requestData();
}

    render() {
        return (
            <>
                <div className='movies'>

                    {
                        this.state.movies.map((movie) =>
                            <Movie key={movie.id} title={movie.title} poster={movie.poster} country={movie.country} year={movie.year} />

                        )
                    }
                </div>
                


            </>
        );
    }
}

export default MoviesXhr;  