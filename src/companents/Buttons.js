import React, { useState } from 'react';
import '../css/Button.css'
import axios from 'axios'
import { useEffect } from 'react';
import { Progress } from 'antd'
import { Link } from 'react-router-dom'




const Buttons = () => {
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500"
    const [click, Setclick] = useState(true)
    const [popularMovies, setPopularMovies] = useState([])
    const [theatr, Settheatr] = useState([])
    const [currentMovies, Setcurrenmovies] = useState([])

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/tv/on_the_air?api_key=a6f590e9cf000cad6e3f96fb4e459f5c&language=en-US&page=1")
            .then(res => {
                // console.log(res.data.results);
                setPopularMovies(res.data.results)
                Setcurrenmovies(res.data.results)
            })
            .catch(err => {
                console.log(err);
            })
        axios.get("https://api.themoviedb.org/3/tv/airing_today?api_key=a6f590e9cf000cad6e3f96fb4e459f5c&language=en-US&page=1")
            .then(ress => {
                // console.log(ress.data.results);
                Settheatr(ress.data.results)
                
            })
    }, []);
    const Uzgarish = () => {
        Setcurrenmovies(popularMovies)
        Setclick(true)


    }
    const Uzgarish2 = () => {
        Setcurrenmovies(theatr)
        Setclick(false)
    }
    return (
        <div className='container'>
            <div className='mt-5 d-flex'>
                <div className=''>
                    <h4>What's Popular</h4>
                </div>
                <div className='btn_border '>
                    <button onClick={Uzgarish} className={click ? "click_button click_button2" : "click_button2"}>On Tv</button>
                    <button onClick={Uzgarish2} className={!click ? "click_button click_button2" : "click_button2"}>In Theaters</button>
                </div>
            </div>
            <div className='mt-3 '>
                <div className='row'>
                    {
                        (currentMovies.length > 0) && currentMovies.map((item, index) => {
                            return (
                                <div className='col-3' key={index}>
                                    <Link to={`/movie/${item.id}`}>
                                        <div className='mt-3'>
                                            <div className='poster_img'>
                                                <img width="250px" src={IMAGE_URL + item.poster_path} alt="" />
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
        </div>
    );
}

export default Buttons;
