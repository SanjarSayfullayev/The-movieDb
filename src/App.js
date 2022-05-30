import { Outlet } from 'react-router-dom';
import './App.css';
import Buttons from './companents/Buttons';
import Navbar from './companents/Navbar';
import Sidebar from './companents/Sidebar';
import Footerr from './companents/Footerr';

function App() {
  return (
    <div>
        <Sidebar/>
        <Buttons/>
    </div>
  );
}

export default App;
