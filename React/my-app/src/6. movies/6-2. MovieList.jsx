import React from 'react';
import MovieCard from './6-1. MovieCard';

function MovieList(props) {

    const movies = [
        {
            title: 'Titanic'
        },
        {
            title: 'Lion King'
        },
        {
            title: 'Good Will Hunting'
        }
    ]

    return (
        <div>
            {movies.map((movie) => {
                return (
                    <MovieCard title={movie.title} />
                )
            })}
            
            {//<MovieCard title="Titanic" />
            }
            {//<MovieCard title="Lion King" />
            }
        </div>
    );
}

export default MovieList;