
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';



const App = () => {
  const [movies, setMovies] = useState([])

  const getDate = async () => {
          
    try{
      const {data} = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")  
      console.log(data)
      setMovies(data.results)
    }catch(e){
      console.log(e)
    }
    
  }

  useEffect(() => {
    getDate()
  }, [])



  return (
    <Container>
      <Row>
       {movies.map(movie => (
        <Col>
         <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={movie.poster_path ? "https://image.tmdb.org/t/p/w500"+movie.poster_path : require("./assets/emptyImage.png")} />
          <Card.Body>
           <Card.Title>{movie.title.slice(0, 50)}</Card.Title>
           <Card.Text>
           {movie.overview.slice(0,100)}
         </Card.Text>
         <Button variant="primary">Go somewhere</Button>
       </Card.Body>
     </Card>
     </Col>
    ))}
    </Row>
    </Container>
  );
}

export default App;