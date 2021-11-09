import React, { Component } from "react";
import NavBar from "../Format/NavBar";
import { Redirect } from "react-router-dom";
import QuizQuestion from "./QuizQuestion";
import QuizService from "../../service/QuizService";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import Quiz from "../model/Quiz";

function shuffle(a,b) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  var c=[];
  for(i=0 ; i<b ; i++){
    c.push(a[i]);
  }
  console.log("a",a);
  console.log("c",c);
  return c;
}

class QuizTaker extends Component {
  constructor(props) {
    super(props);
    const  questions  = shuffle(this.props.quiz.questions,this.props.quiz.numb);
    // shuffle(questions);
    // const questions2 = questions.slice(0,this.props.quiz.numb);
    // questions=questions2;
    console.log("fdf",questions);
    const answers = [];
    for (let i = 0; i < questions.length; i++) {
      answers.push({
        question_id: questions[i].id,
        answer: -1,
      });
    }

    this.state = {
      que:questions,
      quiz: this.props.quiz,
      user: this.props.user,
      answers: answers,
    };
    console.log("state",this.state);
    sessionStorage.setItem("quiz-attending", this.state.quiz._id);
  }
  
  componentDidMount() {}

  handleSelectAnswer = (q_id, opt_id) => {
    const { answers } = this.state;
    const index = answers.findIndex((answer) => answer.question_id === q_id);
    answers[index].answer = opt_id;
    this.setState({ answers: [...answers] });
  };

  handleSubmit = () => {
    const user_id = this.state.user._id;
    const quiz_id = this.state.quiz._id;
    const request = {
      user_id: user_id,
      quiz_id: quiz_id,
      answers: [...this.state.answers],
    };
    QuizService.submitAnswer(request).then((response) => {
      if (response === false) {
        console.log("FAILED!");
      } else {
        this.props.history.push({
          pathname: "/quiz-taken",
          state: { quiz: response },
        });
      }
    });
  };

  render() {
    if (!this.props.checkLogin()) {
      return <Redirect to={{ pathname: "/login" }} />;
    }

    const { quiz } = this.state;
    const renderTime = ({ remainingTime }) => {
      if (remainingTime === 0) {
        return this.handleSubmit();
      }
    //onClick={this.handleSubmit}
      return (
        <div className="timer">
          <div className="text">Remaining</div>
          <div className="value">{remainingTime}</div>
          <div className="text">seconds</div>
        </div>
      );
    };
    return (
      <React.Fragment>
        <NavBar
          isLoggedIn={this.props.isLoggedIn}
          checkLogin={this.props.checkLogin}
          onLogout={this.props.onLogout}
        />
         <div className="timer-wrapper">
          <CountdownCircleTimer
          isPlaying
          duration={quiz.time *60}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [true, 1000]}
          >
          {renderTime}
        </CountdownCircleTimer>
        </div>
        <div className="container-fluid">
          {/* <div className="row mt-5">
            <div className="col-sm-8 offset-sm-2 section">
              
              <div
                className="option-dropdown pt-4"
                style={{
                  width: "max-content",
                }}
              >
                
    
              </div>
            </div>
          </div>  */}

         

          <div className="row mt-5">
            {console.log()}
            {this.state.que.map((question) => (
              <QuizQuestion
                key={question.id}
                question={question}
                onSelectAnswer={this.handleSelectAnswer}

              />
            ))}
          </div>
          <div className="row mt-4 mb-4">
            <div
              className="col-sm-12"
              style={{
                textAlign: "center",
              }}
            >
              <button className="tool-button" onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default QuizTaker;
