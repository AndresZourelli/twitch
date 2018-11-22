import React from 'react';
import {Row, Col} from "reactstrap";
import "./Header.css";
import Login from "../Login/Login";
import Sign_up from "../Sign_Up/Sign_up";
const Header = () => {
	return(
		<Row className="dimension">
		<Col xs='3' className="onTopLeft">
		<h2>
		A Little About Our Featured Streamer:
		</h2>
		<h3>   
		This person does this kind of streaming they also have a youtube channel if you wanna go show them some support!
		</h3>
		</Col>
		<Col xs='6' className='formatMiddle'>
		<iframe
    src="https://player.twitch.tv/?channel=stealthrg&muted=true"
    height="100%"
    frameBorder="0"
    width="100%"
    scrolling="false"
    allowFullScreen="false"
    autoPlay="true"
    muted="true">
		</iframe>
		</Col>
		<Col xs='3' className="onTopRight">
			<div>
				<Login/>
				<Sign_up/>
			</div>
			<h2>
			Wanna be Featured?
			</h2>
			<h3>   
			Go submit a Get Featured form on the Streamer Society Page and consider joining our community!
			</h3>
		</Col>
		</Row>
	);
}

export default Header;