import React from 'react';
export default class PassReset extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			password: '',
			passwordMatch: ''
		}
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	onPasswordMatchChange = (event) => {
		this.setState({passwordMatch: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:5000/reset/'+this.props.match.params.token,{
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				password: this.state.password,
				passwordMatch: this.state.passwordMatch
			})
		})
	}
 render(){
  return(
   <div>
    <article>
    	<main>
    		<fieldset>
		    	Password: <br/>
		    	<input type="text" name="Password" onChange = {this.onPasswordChange}/><br/>

		    	Re-enter Password: <br/>
		    	<input type="text" name="PasswordMatch" onChange= {this.onPasswordMatchChange}/><br/>
				
				Submit: <br/>
				<input onClick={this.onSubmitSignIn} type='submit' value='register'/>
			</fieldset>
		</main>


    </article>
   </div>
  );
 }
}