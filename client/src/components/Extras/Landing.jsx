import React from "react";
import Icon from "../Format/Icon";
import NavBar from "../Format/NavBar";
import { Link, Redirect } from "react-router-dom";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon
} from "react-share";

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
        <br></br>
        <FacebookShareButton url={"https://walkover-takequiz.herokuapp.com/"}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={"https://walkover-takequiz.herokuapp.com/"}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <EmailShareButton
        url={"https://walkover-takequiz.herokuapp.com/"}
        subject={"TakeQuiz app"}
        body={"Hey I dound this great app where you can create and attend quizzes"}
      >
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
        </div>

  
        
        
        
                
                
        
        
      </div>
    </React.Fragment>
  );
};

export default Landing;
