
import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

import './CardNav.css';
import { Container, Row, Col } from 'reactstrap';


const CardNav = ({route, OnRouteChange}) => {
  return (
    <Container>
      <Row>
        <Col>
          <div className = 'CardStyles'>
          <Card className='dimensionSet' onClick={() => OnRouteChange('OBS')} >
            <CardImg src="https://obsproject.com/assets/images/OBSDemoApp.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>How to use OBS</CardTitle>
              <CardSubtitle>Free and open source software for video recording and live streaming</CardSubtitle>
            </CardBody>
          </Card>
          </div>
        </Col>
        <Col>
          <div className = 'CardStyles'>
          <Card className='dimensionSet' onClick={() => OnRouteChange('Equip')} >
            <CardImg src="https://www.muycomputer.com/wp-content/uploads/2017/11/PC-para-gaming-1000x576.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Equipment</CardTitle>
              <CardSubtitle>What's the best streaming equiptment at your price point?</CardSubtitle>
            </CardBody>
          </Card>
          </div>
        </Col>  
      </Row>
      <Row className='bottom'>
        <Col>
          <div className = 'CardStyles'>
          <Card className='dimensionSet' onClick={() => OnRouteChange('Alerts')} >
            <CardImg src="https://i1.wp.com/streamplaygraphics.com/wp-content/uploads/edd/2018/01/twitch-alert.png" alt="Card image cap" />
            <CardBody>
              <CardTitle>Alerts</CardTitle>
              <CardSubtitle>Configuring twitch alerts for going live, gaining subs, and more.</CardSubtitle>
            </CardBody>
          </Card>
          </div>
        </Col>
        <Col>
          <div className = 'CardStyles'>
          <Card className='dimensionSet' onClick={() => OnRouteChange('Design')} >
            <CardImg src="https://cdn.shopify.com/s/files/1/1353/2527/products/stream-panels-overwatch-twitch-panels-1_1024x1024.jpg?v=1527255034" alt="Card image cap" />
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