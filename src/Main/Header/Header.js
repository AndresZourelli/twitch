import React, { Component } from 'react';
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
    src: `slide1`,
    title: "Explore the World of Streaming",
    csstitle: "title1",
    subtitle:"Guides, Tips, Publicity, and Collaborators",
    description: "ajdfbngv akfdjvngkfjbv djhvhbkjf jfkdhfrbv fkdjfghkjr vfjudkfhvurn ujfbe fjer ejfnjfkgr. rjdfnhifngjf jfjvfjuv jndfjknvkjfnv.",
    alt:"blue controller",
    color:"overlay_colcolor1"
  },
  {
    src:  `slide2`,
    title: "Featured Stream",
    csstitle: "title2",
    subtitle:"A Person",
    description: "ajdfbngv akfdjvngkfjbv djhvhbkjf jfkdhfrbv fkdjfghkjr vfjudkfhvurn ujfbe fjer ejfnjfkgr. rjdfnhifngjf jfjvfjuv jndfjknvkjfnv.",
    alt:"blue controller",
    color:"overlay_colcolor2"
  },
  {
    src: `slide3`,
    title: "The Streamer Society",
    csstitle: "title3",
    subtitle:"A community of streamers collaborating and sharing viewers and advice",
    description: "Join The Streamer Society to become a Featured Streamer by filling out a Get a Feature Form under the Streamer Society page, get in contact with similar streamers on our collaborator chat space, and exchange Tips and Tricks.",
    alt:"blue controller",
    color:"overlay_colcolor3"
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
        <Row>
            <Col sm='9' className = "zeroMargin">
              <div className={item.src} alt={item.altText}>
              </div>
            </Col>
            <span className='title'>
            <h1 className={item.csstitle}>{item.title}</h1>
            <h2 className={item.csstitle}>{item.subtitle}</h2>
            </span>
            <Col className="overlay_col overlay_hide" sm="3" >
            <span className="alignVertical">{item.description}</span>
            </Col>
        </Row>
        
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
       
        <CarouselIndicators className='padded' items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />

        {slides}
        
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        
      </Carousel>
    );
  }
}


export default Header;