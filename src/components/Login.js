import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {


    state = {
        username: "",
        password: ""
      };
    
      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
      send=()=>
      {let newData={
        username:this.state.username,password:this.state.password
      }
       // console.log (this.state.username,this.state.password)
        axios.post("http://65.0.100.29:2008/add",newData)
        .then((res)=>
        {
            console.log(res)
        })
        this.setState({
            username: "",
        password: ""
        })
      }
    
  render() {
    return (
      <div>Login
    <form onSubmit={this.onSubmitEvent}>
          <input
            type="text"
            name="username"
            placeholder="Enter Your Name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="password"
            placeholder="Enter Your password"
            onChange={this.handleChange}
          />
          <button onClick ={this.send}type="submit">Submit</button>
        </form>
      
      </div>
    )
  }
}
