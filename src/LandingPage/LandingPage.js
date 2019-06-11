import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button'
import SideNav from '../SideNav/SideNav';
import Card from '../Card/Card';
import Headings from '../Headings/Headings'

const landingPage = (props) =>{
  return(
    <div>
      <Container className='landing-page-container'>
      <Row>
        <nav>Navbar Here</nav>
      </Row>
      <Row className='main-content'>
        <Col className='side-nav-col'>
          <SideNav/>
        </Col>
        <Col className='card-col'>
          <Row className='card-heading'>
            <Headings heading='Personal Board'> </Headings>
          </Row>
          <Row className='card-row main-card-row'>
            <Card cardName='Untitled board ' className='main-card'/>
            <Card cardName='create board'/>
          </Row>
          <Row className='card-heading'>
            <Headings heading='Board Name'> </Headings>
          </Row>
          <Row className='card-row'>
            <Card  src = '#'cardName='create board'/>
          </Row>
        </Col>
      </Row>
      </Container>
    </div>
  )
}
export default landingPage