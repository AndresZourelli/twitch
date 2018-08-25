import React from 'react';
import { Row, Col } from 'reactstrap';
import './OBS.css';
const OBS = () => {
	return(
		<div>
		
			<Row className="stretch">
				<Col className = "left" sm = "8">
					<h2 className="Title_OBS">Getting Started with OBS</h2>
					<p>You can get OBS <a href="https://obsproject.com/" target="_blank">here.</a></p>
					<div className = "OBS_Why">
						<h4>Why use OBS?</h4>
						<p></p>
					</div>
				</Col>
				<Col className = "right" sm = "4">
				His
				</Col>
			</Row>
		</div>
		);
};

export default OBS;