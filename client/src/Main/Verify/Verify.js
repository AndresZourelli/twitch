import React from 'react';
export default class Verify extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			email: '',
			res:''
		}
	};

	componentDidMount() {fetch('http://localhost:5000/verify/'+this.props.match.params.emailtoken,
		)
	.then((res)=>res.json()).then(data=>this.setState({res: data}))
	};
	
	onServerFetch = () => { 
		if(this.state.res==='Success'){
		 return <div>Email Verified</div>
		}
		else{
			return <div>Email not Vertified</div>
		}

	};
 render(){
  return(
   <div>
   {this.onServerFetch()}
   </div>
  );
 }


}