import React from 'react';
import "./ErrorNotFound.css";

import {
  Redirect, Link
} from 'react-router-dom';
const ErrorNotFound = () => {
	return(
		<div>

		<h1 className="Error"><Link to="/Home">404 Page Not Found</Link></h1>
		</div>
		);
};

export default ErrorNotFound;