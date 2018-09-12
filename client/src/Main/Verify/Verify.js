import React from 'react';
export default class Verify extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			email: '',
		}


	}

	componentWillMount() {fetch('http://localhost:5000/verify/'+this.props.match.params.emailtoken)};

 render(){
  return(
   <div>
    Email Verified
   </div>
  );
 }
}