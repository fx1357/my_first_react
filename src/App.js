
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';



const App = () => {
  const [articles, setArticles] = useState([])

  const getDate = async () => {
          
    try{
      const {data} = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-03-10&sortBy=publishedAt&apiKey=f1c87e2bb86248de9f9492e513f93e1f")  
      console.log(data)
      setArticles(data.articles)
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
       {articles.map(article => (
        <Col>
         <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={article.urlToImage ? article.urlToImage : require("./assets/emptyImage.png")} />
          <Card.Body>
           <Card.Title>{article.title.slice(0, 50)}</Card.Title>
           <Card.Text>
           {article.description.slice(0,100)}
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