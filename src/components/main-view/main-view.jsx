import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
    constructor() {
        super(); // refers to OOP, means call the constructor of the parent class, in this case 'React.Component'
        this.state = {
            movies: [
                { _id: 1, title: 'Sharknado', description: 'Sharknado is a 2013 American made-for-television sci-fi disaster film about a waterspout that lifts sharks out of the ocean and deposits them in Los Angeles. It is the first installment in the Sharknado film series.', imagePath: 'https://images-na.ssl-images-amazon.com/images/I/71QROsENugL._AC_SL1254_.jpg' },
                { _id: 2, title: 'Mega Shark Versus Mecha Shark', description: 'The film is a sequel to Mega Shark Versus Giant Octopus and Mega Shark Versus Crocosaurus, and is the third installment in the Mega Shark film series. A tugboat pulling a huge iceberg arrives at a port in Alexandria, Egypt, when suddenly, the iceberg shatters and releases a megalodon from suspended animation. The Mega Shark begins its reign of terror by flipping the tugboat to the air until it crashes and decapitates the Sphinx hundreds of miles away in Giza.', imagePath: 'https://m.media-amazon.com/images/M/MV5BMTQzMDIyMjgxMF5BMl5BanBnXkFtZTgwODYzNjg4MDE@._V1_.jpg' },
                { _id: 3, title: 'Mega Piranha', description: 'The film focuses on the Orinoco River in Venezuela, where a strain of genetically modified piranha have escaped into an isolated tributary of the river. Through human interference of the local environment, the megapiranha manage to escape from their isolated spot and swim downstream, killing all that crosses their path. The megapiranha gradually make their way towards Florida at the height of the tourist season.', imagePath: 'https://m.media-amazon.com/images/M/MV5BNjU3ODY2NzMwNV5BMl5BanBnXkFtZTcwNjg4MzI1Mw@@._V1_.jpg' }
            ],
            selectedMovie: null
        }
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    render() {
        const { movies, selectedMovie } = this.state;

        if (movies.length === 0) return <div class="main-view">'The list is empty'</div>;

        return (
            <div className="main-view">
                {selectedMovie
                    ? <MovieView movieData={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                    : movies.map(movie => (
                        <MovieCard key={movie._id} movieData={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />
                    ))
                }
            </div>
        );;
    }
}
export default MainView;
