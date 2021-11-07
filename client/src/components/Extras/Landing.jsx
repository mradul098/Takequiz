import React from "react";
import Icon from "../Format/Icon";
import NavBar from "../Format/NavBar";
import { Link, Redirect } from "react-router-dom";

const Landing = (props) => {
  return (
    <React.Fragment>
     
      <div className="container-fluid bg">
        <div className="" style={{ textAlign: "center", marginTop: "10vh" }}>
          <Icon size="240px" />
        </div>
        <div className="jumbo">TakeQuiz
        <br></br>
        <Link to="/login">
                  <button
                    type="submit"
                    className="button register-button"
                    style={{
                      // width: "20%",
                      height: "42px",
                      // marginLeft:"55%"
                    }}
                  >
                    Login
                  </button>
        </Link>
        <br></br>
        <Link to="registration">
                  <button
                    type="submit"
                    className="button register-button"
                    style={{
                      // width: "100%",
                      height: "42px",
                      // marginLeft:"55%"
                    }}
                  >
                    Register
                  </button>
        </Link>
        </div>

        <div className="col-sm-2 offset-sm-4 jumbo">
        
                  
        
                </div>
                
        
        
      </div>
    </React.Fragment>
  );
};

export default Landing;
