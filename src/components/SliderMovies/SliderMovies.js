import React from 'react';
import "./SliderMovies.scss";
import { Carousel, Button } from "antd";
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';


const SliderMovies = (props) => {
    const { movies } = props;

    if (movies.loading || !movies.result) {
        return (
            < Loading />
        )
    } else {
        const { results } = movies.result;
        return (<Carousel autoplay className="slider-movies">
            {results.map(movie => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </Carousel>)
    }


}

const Movie = (props) => {
    const { movie: { id, backdrop_path, title, overview } } = props;
    const backdropPath = `https://image.tmdb.org/t/p/original/${backdrop_path}`
    return (
      <div className='slider-movies_movie' style={{ backgroundImage: `url('${backdropPath}')` }} >
        <div className='slider-movies_movie-info'>
          <div>
            <h2>{title}</h2>
            <p>{overview}</p>
            <Link to={`/movie/${id}`}>
              <Button type='primary'>Ver mas</Button>
            </Link>
          </div>
        </div>
      </div>)
  }


export default SliderMovies