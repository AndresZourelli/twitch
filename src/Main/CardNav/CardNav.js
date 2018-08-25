
import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

import './CardNav.css';
import { Container, Row, Col } from 'reactstrap';


const CardNav = ({route, OnRouteChange}) => {
  return (
    <Container className='zeroMargins'>
    	<Row className='center'>
        <Col className='zeroMargins' xs='12' sm='6' md='4'>
          <div className = 'CardStyles'>
          <Card className='dimensionSet' onClick={() => OnRouteChange('OBS')} >
            <CardImg className='borderSquare' src="https://obsproject.com/assets/images/OBSDemoApp.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>How to use OBS</CardTitle>
              <CardSubtitle>Free and open source software for video recording and live streaming</CardSubtitle>
            </CardBody>
          </Card>
          </div>
        </Col>
        <Col className='zeroMargins' xs='12' sm='6' md='4'>
          <div className = 'CardStyles'>
          <Card className='dimensionSet' onClick={() => OnRouteChange('Equip')} >
            <CardImg className='borderSquare' src="https://www.muycomputer.com/wp-content/uploads/2017/11/PC-para-gaming-1000x576.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Equipment</CardTitle>
              <CardSubtitle>What's the best streaming equiptment at your price point?</CardSubtitle>
            </CardBody>
          </Card>
          </div>
        </Col>  
        <Col className='zeroMargins' xs='12' sm='6' md='4'>
          <div className = 'CardStyles'>
          <Card className='dimensionSet' onClick={() => OnRouteChange('Alerts')} >
            <CardImg className='borderSquare zeroMargins' src="https://i1.wp.com/streamplaygraphics.com/wp-content/uploads/edd/2018/01/twitch-alert.png" alt="Card image cap" />
            <CardBody>
              <CardTitle>Alerts</CardTitle>
              <CardSubtitle>Configuring twitch alerts for going live, gaining subs, and more.</CardSubtitle>
            </CardBody>
          </Card>
          </div>
        </Col>
        <Col className='zeroMargins' xs='12' sm='6' md='4'>
          <div className = 'CardStyles'>
<<<<<<< HEAD
          <Card className='dimensionSet' onClick={() => OnRouteChange('Design')} >
            <CardImg className='borderSquare' src="https://cdn.shopify.com/s/files/1/1353/2527/products/stream-panels-overwatch-twitch-panels-1_1024x1024.jpg?v=1527255034" alt="Card image cap" />
=======
          <Card className='dimensionSet' onClick={() => OnRouteChange('Designs')} >
            <CardImg src="https://cdn.shopify.com/s/files/1/1353/2527/products/stream-panels-overwatch-twitch-panels-1_1024x1024.jpg?v=1527255034" alt="Card image cap" />
>>>>>>> 794e25139e62695d2825a75a2d3f46cd3adee5fa
            <CardBody>
              <CardTitle>Branding</CardTitle>
              <CardSubtitle>What's your style? Designing the assets required to attract viewers.</CardSubtitle>
            </CardBody>
          </Card>
          </div>
        </Col>  
        </Row>
    </Container>
  );
};

export default CardNav;