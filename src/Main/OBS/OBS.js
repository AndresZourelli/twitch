import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './OBS.css';
const OBS = () => {
	return(
		<Container className="obs_contain">
			<Row >
				<Col className = "left" sm = "8">
					<h3 className="Title_OBS">Getting Started with OBS</h3>
					<p>You can get OBS <a href="https://obsproject.com/">here.</a></p>
					<div className = "OBS_Why">
						<h4>Why use OBS?</h4>
						<p></p>
					</div>
				</Col>
				<Col className = "right" sm = "4">
				His
				</Col>
			</Row>
		</Container>
		);
};

export default OBS;