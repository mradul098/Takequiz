import React, { Component } from "react";
import NavBar from "../Format/NavBar";
import { Link, Redirect } from "react-router-dom";
import AuthService from "../../service/AuthService";
import AuthError from "../Format/AuthError";
import Captcha from "react-numeric-captcha";
import "./captcha.css"
// import { text } from "express";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      error: false,
      captchaSuccess: false,
      text2:"Looks like you made a mistake. The email is probably not valid or taken. also check your internet connection"
    };
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value, error: false });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value, error: false });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value, error: false });
  };

  handleRoleChange = (e) => {
    this.setState({ role: e.target.value, error: false });
  };

  handleRegistrationSubmit = (e) => {
    e.preventDefault();
    const { name, email, password,captchaSuccess } = this.state;
    AuthService.register({ name, email, password }).then((response) => {
      if(captchaSuccess==false){
        this.setState({text2:"Enter valid captcha"})
        this.setState({error:true})
      }
      else{
      if (response === false) {
        this.setState({ error: true });
        this.setState({text2:"Looks like you made a mistake. The email is probably not valid or taken. also check your internet connection"})
      } else {
        alert("Account created Successfully")
        this.props.history.push("/login");
      }}
    });
  };
  radioClick=(e) => {
    console.log(e.target.value)
  }
  render() {
    if (this.props.checkLogin()) {
      return <Redirect to={{ pathname: "/dashboard" }} />;
    }
  
    return (
      <React.Fragment>
      
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8 offset-sm-4 mt-5">
              <Link to="/">
              <button
                    type="submit"
                    className="button register-button"
                    style={{
                      width: "20%",
                      height: "42px",
                    }}
                    onClick={this.handleRegistration} 
                  >
                    Home
                  </button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8 offset-sm-4">
              <div className="auth-title mt-1">Register</div>
            </div>
          </div>
          <form onSubmit={this.handleRegistrationSubmit}>
            <div className="form-group">
              {/* name */}
              <div className="row mt-4">
                <div className="col-sm-4 offset-sm-4">
                  <label className="input-label" htmlFor="inputName">
                    Name
                  </label>
                  <input
                    required="required"
                    type="text"
                    className="form-control input-field"
                    aria-describedby="emailInput"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                  />
                </div>
              </div>

              {/* email */}
              <div className="row mt-4">
                <div className="col-sm-4 offset-sm-4">
                  <label className="input-label" htmlFor="inputEmail">
                    Email address
                  </label>
                  <input
                    required="required"
                    type="email"
                    className="form-control input-field"
                    aria-describedby="emailInput"
                    placeholder="johndoe@email.com"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  />
                </div>
              </div>
              

              {/* password */}
              <div className="row mt-4">
                <div
                  className="col-sm-4 offset-sm-4"
                  //   style={{ backgroundColor: "red" }}
                >
                  <label className="input-label" htmlFor="inputPassword">
                    Password
                  </label>
                  <input
                    required="required"
                    type="password"
                    className="form-control input-field"
                    aria-describedby="passwordInput"
                    placeholder="strong password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                  />
                </div>
              </div>
              
              <div className="row mt-4">
                <div className="col-sm-4 offset-sm-4">
                <Captcha
            onChange={status => this.setState({ captchaSuccess: status })}
          />
                </div>
              </div>
              
              

              <div className="row mt-5">
                <div className="col-sm-2 offset-sm-4">
                  
                  <button
                    type="submit"
                    className="button register-button"
                    style={{
                      width: "100%",
                      height: "42px",
                    }}
                    onClick={this.handleRegistration} 
                  >
                    Register
                  </button>
                </div>
                
              </div>
              {this.state.error && (
                <AuthError text={this.state.text2} />
              )}
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Registration;
