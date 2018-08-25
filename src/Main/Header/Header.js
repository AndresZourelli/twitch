import React, { Component } from 'react';
import streamerBlue from './streamerBlue.png';
import streamerPurple from './streamerPurple.png';
import streamerOrange from './streamerOrange.png';
import { Container, Row, Col } from 'reactstrap';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './Header.css';


const items = [
  {
    src:  `${streamerBlue}`,
    caption: "Streamer Human" 
  },
  {
    src: `${streamerPurple}`
  },
  {
    src: `${streamerOrange}`
  }
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          {<Container className="overlay_col">
          <Row>
            <Col  sm = "8">
            hi
            </Col>
            <Col  sm="4">
              Hello
            </Col>
          </Row>
        </Container>}
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
       
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />

        {slides}
        
        
          
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        {<Container className="overlay_col">
          <Row>
            <Col  sm = "8">
            hi
            </Col>
            <Col  sm="4">
              Hello
            </Col>
          </Row>
        </Container>}
        

      </Carousel>
    );
  }
}


export default Header;