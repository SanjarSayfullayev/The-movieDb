import React, {useEffect, useState} from 'react';
import '../css/Navbar.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
    

    // useEffect(() => {
    //     axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    //     .then(err => {
    //         console.log(err);
    //     })
    // }, []);

    return (
        <div className='bg p-3 right_nav'>
            <div className='container'>
                <div className='d-flex right_navbar'>
                    <div className='d-flex'>
                            <a href="/">
                                    <img width="300px" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" />
                            </a>
                    
                        <div className='item'>
                            <ul class="nav">
                                <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Movies</a>
                                    <div className='navbar_item'>
                                        <ul>
                                                <li><Link to="/movie">Popular</Link></li>
                                                <li><Link to="/movie/now_playing">Now Playing</Link></li>
                                                <li><Link to="/movie/upcoming">Upcoming</Link></li>
                                                <li><Link to="/movie/top_rated">Top rated</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Tv Shows</a>
                                    <div className='navbar_item'>
                                        <ul>
                                                <li><Link to="/tv">Popular</Link></li>
                                                <li><Link to="/tv/airing-today">Airing Today</Link></li>
                                                <li><Link to="/tv/on-the-air">On Tv</Link></li>
                                                <li><Link to="/tv/top-rated">Top rated</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Peoplee</a>
                                    <div className='navbar_item'>
                                        <ul>
                                                <li><Link to="/person">Popular People</Link></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='d-inline m-3'>Plus</p>
                            <p className='d-inline m-3'>Eng</p>
                            <p className='d-inline m-3'>Qo`ng`iroq</p>
                            <p className='d-inline m-3'>Profil</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
