import './App.css';
import LoginPage from './pages/LoginPage';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WhoIsWatchingPage from './pages/WhoIsWatchingPage';
import MoviePage from './pages/MoviePage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TvShows from './pages/TvShowsPage';
import NewPopular from './pages/NewPopularPage';
import MyList from './pages/MyListPage';
import WatchAgain from './pages/WatchAgainPage';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';

function App() {

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/' && location.pathname !== '/user' && <Navbar/>}
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/user' element={<WhoIsWatchingPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/tv-shows' element={<TvShows />} />
        <Route path='/new-popular' element={<NewPopular />} />
        <Route path='/my-list' element={<MyList />} />
        <Route path='/watch-again' element={<WatchAgain />} />
        <Route path={'/:movieName'} element={<MoviePage />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
