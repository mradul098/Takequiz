import React from "react";
import { Link, Redirect } from "react-router-dom";

const Landing = (props) => {
  return (
    <React.Fragment>
     
      
        <div className="" style={{ textAlign: "center", marginTop: "10vh" }}>
          <Icon size="240px" />
        </div>
        <div className="jumbo">Details
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
       
</div>
                
        
        
    
    </React.Fragment>
  );
};

export default Landing;
