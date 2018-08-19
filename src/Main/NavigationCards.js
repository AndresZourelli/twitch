
import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import './Cards.css';
import { Container, Row, Col } from 'reactstrap';


const Cards = (props) => {
  return (

    <Container>
    
      <Row>
        <Col>
          <div className = 'CardStyles center'>
          <Card>
            <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          </div>
        </Col>
        <Col>
          <div className = 'CardStyles  center'>
          <Card>
            <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          </div>
        </Col>  
      </Row>
      <Row>
        <Col>
          <div className = 'CardStyles center'>
          <Card>
            <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          </div>
        </Col>
        <Col>
          <div className = 'CardStyles center'>
          <Card>
            <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          </div>
        </Col>  
      </Row>
    
    </Container>
  );
};

export default Cards;