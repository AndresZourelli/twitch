import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route  } from 'react-router-dom';

const app = (
	<BrowserRouter>
		{/*<Route path="/Home" component={App}/>*/}
		<App/>
	</BrowserRouter>);
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
