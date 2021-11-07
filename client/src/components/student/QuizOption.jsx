import React from "react";

const QuizOption = (props) => {
  return (
    <div className="col-sm-12">
      <div className="row">
        <div className="col-sm-12">
          <div className="row option-section">
            <div className="card">
              <label className="option-label">{props.id + 1}</label>
            </div>
            <div className="card">
              <button className="tool-button2">{props.value}</button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizOption;
