import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/actions/MovieAction'
import { ClipLoader } from 'react-spinners'

const MoviesDetail = () => {
  const dispatch = useDispatch();
  const { loading, genreList } = useSelector((state) => state.movie);
  const movieItem = useLocation().state.value.item;
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  if (loading) {
    return (
      <div className='loader'>
        <ClipLoader color="#f00" loading={loading} size={150} />
      </div>
      );
  }
  return (
    <div className='movieDetail'>
      <div className='movieDetail_img' style={{backgroundImage: 'url('+`https://www.themoviedb.org/t/p/original${movieItem.backdrop_path}`+')'}}/>
      <div>
        <div className='movieDetail_desc'>
          <h1>{movieItem.title}</h1>
          <div className='genre'>
            {movieItem.genre_ids.map((id) => (
              <Badge bg='danger'>
                {genreList.find((item) => item.id === id).name}
              </Badge>
            ))}
          </div>
          <div>
            <span>{movieItem.vote_average} | </span> 
            <span> {movieItem.adult ? "청불" : "Under 18"} | </span>
            <span> {movieItem.release_date}</span>
            <p className='overview'>{movieItem.overview}</p>
            <button className='go_to_video'>예고편 보러가기</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoviesDetail



  // const params = useParams();
  // const { popularMovies, topRatedMovies, upComingMovies, loading } = useSelector((state) => state.movie);
  // useEffect(() => {
  //   dispatch(movieAction.getMovies());
  // }, []);
  // return (
  //   <div>
  //     {movies.results.map((item) => (
  //       <div>
  //         <MoviesDetail item={item}/>
  //       </div>
  //     ))}
  //   </div>
  // )
