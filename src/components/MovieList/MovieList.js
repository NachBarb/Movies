import React from 'react';
import { List } from "antd";
import RenderMovie from '../RenderMovie/RenderMovie';
import Loading from '../Loading/Loading';

import "./MovieList.scss";

const MovieList = (props) => {
    const { movies, title } = props;

    if (movies.loading || !movies.result) {
        return (
            < Loading />
        )
    } else {

        return (
            <List
                className='movie-list'
                size='default'
                header={<h2>{title}</h2>}
                bordered
                dataSource={movies.result.results}
                renderItem={movie => <RenderMovie movie={movie} />}
            />
        )
    }

}


export default MovieList