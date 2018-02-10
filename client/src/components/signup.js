import React, {Component }from 'react';
import axios from 'axios';


class SignUp extends Component {
    constructor(props){
        super(props);

        this.state= {
            email: '',
            password: '',
            username: ''
        }
    }
    handleChange(e){
        const {value, name}= e.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        console.log('form submitted ', this.state);

        axios.post('http://localhost:9000/auth/signup', this.state).then((resp)=>{
            console.log('Sign Up resp: ', resp);

        }).catch((err)=>{
            console.log('sign up error ', err.message);
        });
    }
    render(){
        const {email, username, password}= this.state;
        return(
            <div>
                <h1>Please Sign Up Here</h1>
                <form onSubmit={(e)=>this.handleSubmit(e)} action="">
                    <div>
                        Email:
                        <input onChange={(e)=>this.handleChange(e)} name='email' value={email} type="text"/>
                    </div>
                    <div>
                        Password:
                        <input onChange={(e)=>this.handleChange(e)}  name= 'password' value={password} type="text"/>
                    </div>
                    <div>
                        Username:
                        <input onChange={(e)=>this.handleChange(e)} name = 'username' value={username} type="text"/>
                    </div>
                    <button> Create Account</button>
                </form>
            </div>
        )
    }

}
export default SignUp;