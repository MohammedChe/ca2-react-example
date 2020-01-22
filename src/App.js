import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BrowserRouter, Route} from 'react-router-dom'
import MovieIndex from './views/movies/Index'
import MovieShow from './views/movies/Show'
import MyNavbar from './components/MyNavbar'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Container>
        <Row>
        <Col>
          <Route path="/" exact component={MovieIndex} />
          <Route path="/movie/:id" exact component={MovieShow} />
        </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
