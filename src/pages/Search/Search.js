import React, { useState, useEffect } from 'react'
import { Row, Col } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom';
import MovieCatalog from '../../components/MovieCatalog/MovieCatalog';
import { URL_API, API } from '../../utils/constant';
import Footer from '../../components/Footer/Footer';
import queryString from "query-string";
import { SearchOutlined } from '@ant-design/icons';
import "./Search.scss"

const Search = () => {
    const location = useLocation();
    const [movieList, setMovieList] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const Searchh = queryString.parseUrl(location.search);
            const { s } = Searchh.query;
            if (s) {
                const response = await fetch(`${URL_API}/search/movie?api_key=${API}&language=es-ES&query=${s}&page=1`);
                const movies = await response.json();
                setSearchValue(s);
                setMovieList(movies);
            }

        })();
    }, [location.search]);



    const onChangeSerach = e => {
        const urlParams = queryString.parse(location.search);
        urlParams.s = e.target.value;
        console.log(e.target.value);
        navigate(`?${queryString.stringify(urlParams)}`);
        setSearchValue(e.target.value);
    };

    return (
        <Row>
            <Col span={12} offset={6} className="search">
                <h1>Busca tu película</h1>
                <SearchOutlined value={searchValue} />
                <input value={searchValue} onChange={onChangeSerach} ></input>
            </Col>
            {movieList.results && (
                <Row span={24}>
                    <MovieCatalog movies={movieList} />
                </Row>
            )}
            <Col span={24}>
                <Footer />
            </Col>
        </Row>
    );
}

export default Search;