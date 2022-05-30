import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/Search.css'


const Search = () => {

    const params = useParams()
    const search_name = params.name
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500"
    const [movie, Setmovie] = useState([])
    const [topRated, SettopRated] = useState([])
    const API_KEY = "a6f590e9cf000cad6e3f96fb4e459f5c"

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(res => {
                // console.log(res.data);
                Setmovie(res.data.results)
            })
            .catch(err => {
                // console.log(err);
            })
    }, []);
    // useEffect(() => {
    //     axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
    //         .then(res => {
    //             console.log(res.data);
    //             SettopRated(res.data.results)
    //         })
    //         .catch(err => {
    //             // console.log(err);
    //         })
    // }, []);

    console.log(search_name);
    return (
        <div className='container'>
            <div>
                {
                    search_name !== "error"  ? 
                    movie.filter((val) => val.name.toLowerCase().includes(search_name.toLowerCase())).map((item, index) => {
                        return (
                            <div className='mt-3 search_card' key={index}>
                                <div className='d-flex'>
                                    <div>
                                        <img width="150px" src={IMAGE_URL + item.poster_path} alt="" />
                                    </div>
                                    <div className='w-100 mt-3 ml'>
                                        <p className='fw-bold'>{item.name}</p>
                                        <p>{item.first_air_date}</p>
                                        <span>{item.overview}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }):<div>
                        <h4>There are no movies that matched your query.</h4>
                    </div>
                }
            </div>
            <div>
                {/* {
                    topRated.filter((val) => {
                        if (search_name === "") {
                            return val
                        }
                        else if (val.name.toLowerCase().includes(search_name.toLowerCase())) {
                            return val
                        }
                    }).map((user, index) => {
                        return (
                            <div className='mt-3 search_card' key={index}>
                                <div className='d-flex'>
                                    <div>
                                        <img width="150px" src={IMAGE_URL + user.poster_path} alt="" />
                                    </div>
                                    <div className='w-100 mt-3 ml'>
                                        <p className='fw-bold'>{user.title}</p>
                                        <p>{user.release_date}</p>
                                        <span>{user.overview}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                } */}
            </div>
        </div>
    );
}

export default Search;
