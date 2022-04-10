
import React, { useState } from 'react';
import axios from 'axios';





const App = () => {

// 1. 데이타를 담을 그릇 생성
const [movies, setMovies] = useState([])

const getMovies = async () => {
  // 네트워킹 및 데이터 파싱

  try {
    const res = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")
    console.log(res.data.results)
    setMovies(res.data.results)
  
  } catch(err) {
    console.log(err)
  }

}

const clearMovie = () => {
 
   setMovies([])
}

  return (
    <div>
      {/* <h1>{movies.length}</h1> */}
      {movies.map(movie => (
        <div>
          <h1>{movie.original_title}</h1>
          <span>{movie.overview}</span>
        </div>

      ))}
      <button onClick={() => getMovies()}>데이타 가져오기</button>
      <button onClick={() => clearMovie()}>데이타 비우기</button>
    </div>
  );
};

export default App;