import React, { useEffect } from 'react'
import { movieAction } from '../redux/actions/MovieAction'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import MovieSlide from '../components/MovieSlide'
import { ClipLoader } from 'react-spinners'

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } = useSelector((state) => state.movie);
  console.log("home", popularMovies);
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
//loading이 true면 스피닝을 보여주고
//loading이 false면 데이터를 보여준다
//true: 데이터 도착 전,
//false: 데이터 도착 후를 의미
if (loading) {
  return (
    <div className='loader'>
      <ClipLoader color="#f00" loading={loading} size={150} />
    </div>
    );
}
  return (
    <div className='slide'>
      <Banner movie={popularMovies.results[0]}/> 
      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies}/>
      <h1>Top rated Movie</h1>
      <MovieSlide movies={topRatedMovies}/>
      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upComingMovies}/>
    </div>
  )
}

export default Home
