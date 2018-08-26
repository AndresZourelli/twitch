import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import './OBS.css';
import Sidedrawer_OBS from "./Sidedrawer_OBS";
import Backdrop from "./Backdrop";
class OBS extends Component {
	state = {
		sideDrawerOpen: false,
	};

	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return {sideDrawerOpen: !prevState.sideDrawerOpen};
		});
	};

	backdropClickHandler = () => {
		this.setState({sideDrawerOpen: false});
	};

	render(){
		let sideDrawer;
		let backdrop;
		if (this.state.sideDrawerOpen){
			sideDrawer = <Sidedrawer_OBS className="side"/>;
			backdrop = <Backdrop/>;

		}
	return(
		<div>
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
			<Sidedrawer_OBS className="side"/>
			</Col>
			<Button color="primary btn-class" onClick={ this.drawerToggleClickHandler}>p</Button>{' '}
		
		</Row>
		{sideDrawer}
		{backdrop}
		</div>
		);
};
}
export default OBS;