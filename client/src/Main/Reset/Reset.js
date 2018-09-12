import React from 'react';
export default class Reset extends React.Component{
	constructor(){
		super();
		this.state = {
			email: '',
		}
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:5000/reset',{
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
			})
		});
		this.setState({email: ''});
	}
 render(){
  return(
   <div>
    <article>
    	<main>
    		<fieldset>

		    	Email: <br/>
		    	<input type="text" name="Email" onChange={this.onEmailChange}/><br/>

				Submit: <br/>
				<input onClick={this.onSubmitSignIn} type='submit' value='register'/>
			</fieldset>
		</main>


    </article>
   </div>
  );
 }
}