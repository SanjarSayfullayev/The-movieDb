import React, { Children } from 'react';
import Footerr from './Footerr';
import Navbar from './Navbar';

const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {
                children
            }
            <Footerr/>
        </div>
    );
}

export default Layout;
