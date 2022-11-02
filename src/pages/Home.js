import React from 'react'
import SliderMovies from '../components/SliderMovies/SliderMovies';
import useFetch from '../services/useFetch'
import { URL_API, API } from "../utils/constant"
import MovieList from '../components/MovieList/MovieList';
import { Row, Col } from 'antd';
import  Footer  from '../components/Footer/Footer';

const Home = () => {
    const newMovies = useFetch(`${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`);
    const popularsMovies = useFetch(`${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`);
    const ratedMovies = useFetch(`${URL_API}/movie/top_rated?api_key=${API}&language=es-ES&page=1`)

    return (
        <>
            <SliderMovies movies={newMovies} />
            <Row>
                <Col span={12}>
                    <MovieList title="PELICULAS POPULARES" movies={popularsMovies} />
                </Col>
                <Col span={12}>
                    <MovieList title="TOP PELICULAS MAS PUNTUADAS" movies={ratedMovies} />
                </Col>
            </Row>
            <Footer />
        </>
    )
}

export default Home
