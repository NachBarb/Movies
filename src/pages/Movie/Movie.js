import React from 'react'
import { Row, Col, Botton } from 'antd'
import { useParams } from 'react-router-dom'
import moment from "moment"
import useFetch from '../../services/useFetch'
import { URL_API, API } from '../../utils/constant'
import Loading from '../../components/Loading/Loading'
import "./Movie.scss"

const Movie = () => {
  const { id } = useParams();
  const mov = useFetch(`${URL_API}/movie/${id}?api_key=${API}&language=en-US`)

  if (mov.loading || !mov.result) {
    return <Loading />
  } else {
    return (
      <RenderMovie movie={mov.result} />
    )
  }

}

//Componente interno

const RenderMovie = (props) => {
  const { movie: { backdrop_path, poster_path } } = props;

  const backdropPath = `https://image.tmdb.org/t/p/original/${backdrop_path}`

  return (
    <div className='movie' style={{
      backgroundImage: `url('${backdropPath}')`
    }}>
      <div className='movie_dark' />
      <Row>
        <Col span={8} offset={3} className="movie_poster">
          <PosterMovie image={poster_path} />
        </Col>
        <Col span={10} className="movie_info">
          <MovieInfo movieInfo={props.movie} />
        </Col>
      </Row>
    </div >
  )

}

const PosterMovie = (props) => {

  const { image } = props;
  const posterPath = `https://image.tmdb.org/t/p/original/${image}`

  return (
    <div style={{ backgroundImage: `url('${posterPath}')` }} />

  )

}

const MovieInfo = (props) => {
  const { movieInfo: { id, title, release_date, overview, genres } } = props;
  return (
    <>
      <div className='movie_info-header'>
        <h1>
          {title}
          <span>{moment(release_date, "YYYY-MM-DD").format("YYYY")}</span>
        </h1>
        <button>
          Ver Trailer
        </button>
      </div>
      <div className='movie_info-content'>
        <h3>General</h3>
        <p>{overview}</p>
        <h3>Generos</h3>
        <ul>
          {genres.map(gender => <li key={gender.id}>{gender.name}</li>)}
        </ul>
      </div>
    </>
  )


}

export default Movie