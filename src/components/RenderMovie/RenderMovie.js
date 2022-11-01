import React from 'react'
import { List, Avatar, Button } from "antd";
import { Link } from 'react-router-dom';

const RenderMovie = (props) => {

    const { movie: { id, title, poster_path } } = props;
    const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`

    return (
        <List.Item className='movie-list_movie'>
            <List.Item.Meta
                avatar={<Avatar src={posterPath} />}
                title={<Link to={`/movie/${id}`}>{title}</Link>}
            />
            <Link to={`/movie/${id}`}>
                <Button type='primary' shape='cirlce' icon=">" />
            </Link>
        </List.Item>
    )
}

export default RenderMovie;
