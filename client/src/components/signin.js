import React, {Component }from 'react';
import axios from 'axios';


class SignIn extends Component {
    constructor(props){
        super(props);

        this.state= {
            email: '',
            password: '',
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

        axios.post('http://localhost:9000/auth/signin', this.state).then((resp)=>{
            console.log('Sign in resp: ', resp);

        }).catch((err)=>{
            console.log('sign in error ', err.message);
        });
    }
    render(){
        const {email, password}= this.state;
        return(
            <div>
                <h1>Please Sign In Here</h1>
                <form onSubmit={(e)=>this.handleSubmit(e)} action="">
                    <div>
                        Email:
                        <input onChange={(e)=>this.handleChange(e)} name='email' value={email} type="text"/>
                    </div>
                    <div>
                        Password:
                        <input onChange={(e)=>this.handleChange(e)}  name= 'password' value={password} type="text"/>
                    </div>
                    <button> Sign In</button>
                </form>
            </div>
        )
    }

}
export default SignIn;