import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Movie from './companents/Movie';
import Theaters from './companents/Theaters';
import Layout from '../src/companents/Layout';
import Popular from './companents/Popular';
import NowPlaying from './companents/Now_playing';
import Topfilms from './companents/Topfilms'
import Upcoming from './companents/Upcoming';
import TopRated from './companents/TopRated';
import TvShow from './companents/TvShow';
import OnTv from './companents/OnTv';
import AiringToday from './companents/AiringToday';
import OnTheAir from './companents/OnTheAir';
import TvTopRated from './companents/TvTopRated';
import PopularPeople from './companents/PopularPeople';
import Search from './companents/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout><Outlet/></Layout>}> 
            <Route path='/' element={<App/>}/>
            <Route path='/movie/:id' element={<Movie/>}/>
            <Route path='/theaters/:id' element={<Theaters/>}/>
            <Route path='/movie' element={<Popular/>}/>
            <Route path='/movie/now_playing' element={<NowPlaying/>}/>
            <Route path='/movies/:id' element={<Topfilms/>}/>
            <Route path='/movie/upcoming' element={<Upcoming/>}/>
            <Route path='/movie/top_rated' element={<TopRated/>}/>
            <Route path='/tv' element={<TvShow/>}/>
            <Route path='/tv/:id' element={<OnTv/>}/>
            <Route path='/tv/airing-today' element={<AiringToday/>}/>
            <Route path='/tv/on-the-air' element={<OnTheAir/>}/>
            <Route path='/tv/top-rated' element={<TvTopRated/>}/>
            <Route path='/person' element={<PopularPeople/>}/>
            <Route path='/search/:name' element={<Search/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
