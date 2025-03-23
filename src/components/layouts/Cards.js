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
    <Col sm={6} lg={3} xl={4}>
    <Card className='card' >
      <div className="top_cards" >
        <div className="icon-container" style={{ backgroundColor: colorVars[id - 1] }}>
        <img src={icon} className='cards_icon'/>
        </div>
        <h3>{`0${id}`}</h3>
      </div>
      <Card.Body>
        
        <Card.Title className='cards_title'>{title}</Card.Title>
        <Card.Text className='cards_para'>
          {paragraph}
        </Card.Text>
          <div className="cards_link">
            <Link to="/">
            {link}
            </Link>
          </div>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default Cards;
