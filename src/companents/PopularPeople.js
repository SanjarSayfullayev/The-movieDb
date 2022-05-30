import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container} from 'react-bootstrap'
// import '../css/Movie.css'
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const PopularPeople = () => {

    const API_KEY = "a6f590e9cf000cad6e3f96fb4e459f5c"
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500"
    const [popular, Setpopular] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`)
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
            <Container>
                <h4 className='fw-bold mt-3'>Popular People</h4>
                {/* <Row> */}
                {/* <Col md="3"> */}
                <div className='row'>
                    {
                        (popular.length > 0) && (popular.map((item, index) => {
                            return (
                                // <div className='col-2 person'>
                                //     <img width="100%" src={IMAGE_URL + item.profile_path} alt="" />
                                //     <p className='fw-bold'>{item.name}</p>
                                // </div>


                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={IMAGE_URL + item.profile_path}
                                            alt="green iguana" />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                               {item.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            )
                        }))
                    }
                </div>
                {/* </Col> */}
                {/* </Row> */}
            </Container>
        </div>
    );
}

export default PopularPeople;
