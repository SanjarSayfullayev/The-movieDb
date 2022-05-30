import React from 'react';
import '../css/Sidebar.css'
import {Link} from 'react-router-dom'
import { useState } from 'react';
const Sidebar = () => {
    const [search, Setsearch] = useState('')

    return ( 
        <div>
            <div className='container_fluid'>
                <div className='bg_img'>
                    <div className='text_position container m-4'>
                            <h1>Welcome.</h1>
                            <h4>Millions of movies, TV shows and people to discover. Explore now.</h4>
                            <form>
                                <input onChange={(val) => Setsearch(val.target.value)} className='input1' type="text" placeholder='Search for a movie, tv show, person.....' />
                                <Link to={search.length > 0 ? `/search/${search}`:`/search/error`}>
                                    <input className='input2' type="submit" value="Search"/>
                                </Link>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
