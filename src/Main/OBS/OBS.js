import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import './OBS.css';
const OBS = () => {
	return(
		<Row className="stretch">
			<Col className = "left" xs = "9" >
				<h2 className="Title_OBS">Getting Started with OBS</h2>
				<p>You can get OBS <a href="https://obsproject.com/" target="_blank">here.</a></p>
				<div className = "OBS_Why">
					<h4>Why use OBS?</h4>
					<p></p>

				</div>
			</Col>
			<Col className = "col-info right" xs = "3" >
			His
			</Col>
			<Button color="primary btn-class">p</Button>{' '}
		</Row>
		);
};

export default OBS;