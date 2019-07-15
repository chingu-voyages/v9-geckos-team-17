import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faUserFriends} from '@fortawesome/free-solid-svg-icons';
// import Button from 'react-bootstrap/Button'
import SideNav from '../../components/SideNav/SideNav';
import Card from '../../components/Card/Card';
import Headings from '../../components/Headings/Headings';

const landingPage = props => {
  return (
    <div>
      <Container className='landing-page-container mt-5'>
      <Row className='main-content'>
        <Col className='side-nav-col'>
          <SideNav/>
        </Col>
        <Col className='card-col'>
          <Row className='card-heading'>
            <Headings heading='Personal Board' icon={<FontAwesomeIcon icon={faUser} />}/> 
          </Row>
          <Row className='card-row main-card-row'>
            <Card cardName='Untitled board ' className='main-card'/>
            <Card cardName='Create new board'/>
          </Row>
          <Row className='card-heading'>
            <Headings heading='Board Name' icon={<FontAwesomeIcon icon={faUserFriends} />}/>
          </Row>
          <Row className='card-row'>
            <Card  src = '#'cardName='create board'/>
          </Row>
        </Col>
      </Row>
      </Container>
    </div>
  );
};
export default landingPage;
