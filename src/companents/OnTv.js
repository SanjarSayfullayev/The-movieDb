import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormatIndentDecreaseSharpIcon from '@mui/icons-material/FormatIndentDecreaseSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import BookmarkSharpIcon from '@mui/icons-material/BookmarkSharp';
import StarBorderPurple500SharpIcon from '@mui/icons-material/StarBorderPurple500Sharp';
import { Progress } from 'antd';
import '../css/Movie.css'


const OnTv = () => {
    const params = useParams()
    // console.log(params.id);
    const movie_id = params.id
    const API_KEY = "a6f590e9cf000cad6e3f96fb4e459f5c"
    const [movie, Setmovie] = useState()
    const [loading, Setloading] = useState(true)
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500"

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/${movie_id}?api_key=${API_KEY}&language=en-US`)
            .then(res => {
                console.log(res.data);
                Setmovie(res.data)
                Setloading(false)
            })
    }, []);

    if (loading) {
        return <div>Yuklanyapti</div>
    }

    return (
        <div className='mt-5 bg_1'>
            {
                <Container>
                    <Row>
                        <Col md="3" className='img_page'>
                            <img width="300px" src={IMAGE_URL + movie.poster_path} alt="" />
                        </Col>
                        <Col md="8" className='mt-5'>
                            <h3>{movie.original_name}</h3>
                            <div className='d-flex '>
                                {
                                    movie.genres.map((item, index) => {
                                        return (
                                            <div key={index} className="genres_text">
                                                <p>{item.name}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='progres_link'>
                                <Progress className='progres' type="circle" percent={movie.vote_average * 10} width={60} />
                            </div>
                            <FormatIndentDecreaseSharpIcon sx={{ color: "white", fontSize: "45px" }} className='icon' />
                            <FavoriteBorderSharpIcon sx={{ color: "white", fontSize: "45px" }} className='icon' />
                            <BookmarkSharpIcon sx={{ color: "white", fontSize: "45px" }} className='icon' />
                            <StarBorderPurple500SharpIcon sx={{ color: "white", fontSize: "45px" }} className='icon' />
                            <div>
                                <h4>Overview</h4>
                                <p>{movie.overview}</p>
                            </div>
                            <div className='mt-3 row'>
                                {
                                    (movie.created_by.length > 0) && movie.created_by.map((item, index) => {
                                        return (
                                            <div className='col-4'>
                                                <p className='fw-bold'>{item.name}</p>
                                                <p>Creator</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            }
        </div>
    );
}

export default OnTv;
