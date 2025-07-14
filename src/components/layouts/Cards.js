import React from 'react';
import {Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/Cards.css'

const Cards = ({ icon ,id, title, paragraph, link}) => {
  const colorVars = [
    "var(--blue-color-bg)",  
    "var(--primary-bg)",   
    "var(--green-color-bg)", 
    "var(--primary-bg)",  
    "var(--green-color-bg)", 
    "var(--blue-color-bg)",
  ];
  return (
    <Col sm={6} lg={3} xl={4} className="d-flex mb-4">
  <Card className='card h-100 d-flex flex-column '>
    <div className="top_cards">
      <div className="icon-container" style={{ backgroundColor: colorVars[id - 1] }}>
        <img src={icon} className='cards_icon' />
      </div>
      <h3>{`0${id}`}</h3>
    </div>
    <Card.Body className="d-flex flex-column justify-content-between">
      <div>
        <Card.Title className='cards_title'>{title}</Card.Title>
        <Card.Text className='cards_para'>{paragraph}</Card.Text>
      </div>
      <div className="cards_link mt-auto">
        <Link to="/">{link}</Link>
      </div>
    </Card.Body>
  </Card>
</Col>

  );
}
export default Cards;
