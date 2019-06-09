import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'
import SideNav from '../SideNav/SideNav'


const landingPage = (props) =>{
  return(
    <div>
      <Container>
      <Row>
        <nav>Navbar Here</nav>
      </Row>
      <Row>
        <Col>Side-nav here
          <SideNav/>
        </Col>
        <Col>Create Structure</Col>
        <Col>create Board</Col>
      </Row>
      </Container>
    </div>
  )
}
export default landingPage