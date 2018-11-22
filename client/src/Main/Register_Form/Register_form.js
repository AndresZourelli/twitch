import React from 'react';
export default class Register extends React.Component{
	constructor(){
		super();
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordMatch: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onUsernameChange = (event) => {
		this.setState({username: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	onPasswordMatchChange = (event) => {
		this.setState({passwordMatch: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:5000/signup',{
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				username: this.state.username,
				email: this.state.email,
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
		    	Username: <br/>
		    	<input type="text" name="Username" onChange={this.onUsernameChange}/><br/>

		    	Email: <br/>
		    	<input type="text" name="Email" onChange={this.onEmailChange}/><br/>

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