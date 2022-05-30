import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap'
import { Progress } from 'antd';
import { Link } from 'react-router-dom';


const OnTheAir = () => {

    const API_KEY = "a6f590e9cf000cad6e3f96fb4e459f5c"
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500"
    const [popular, Setpopular] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`)
            .then(res => {
                console.log(res);
                Setpopular(res.data.results)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    return (
        <div>
            <div>
                <Container>
                    <h4 className='mt-3'>TV Shows Airing Today</h4>
                    <Row>
                        <Col md="3">

                        </Col>
                        <Col md="9">
                            <div className='mt-3 '>
                                <div className='row'>
                                    {
                                        (popular.length > 0) && popular.map((item, index) => {
                                            return (
                                                <div className='col-3' key={index}>
                                                    <Link to={`/tv/${item.id}`}>
                                                        <div className='mt-3'>
                                                            <div className='poster_img'>
                                                                <img width="200px" src={IMAGE_URL + item.poster_path} alt="" />
                                                                <div className='progres_back'>
                                                                    <Progress className='progres' type="circle" percent={item.vote_average * 10} width={50} />
                                                                </div>
                                                            </div>
                                                            <div className='mt-4 text'>
                                                                <p className='text1'>{item.original_name}</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <p>{item.first_air_date}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default OnTheAir;
