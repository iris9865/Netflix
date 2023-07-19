import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MoviesDetail from './pages/MoviesDetail';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className='wrapper'>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MoviesDetail />} />
      </Routes>
    </div>
  );
}

export default App;
