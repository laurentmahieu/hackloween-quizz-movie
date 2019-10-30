import React from "react";
import NavBar from "./NavBar";
import "./style/LetsPlay.scss";

class LetsPlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ScoreCount: 0,
      count: 20
    };
    this.counterFunc = setInterval(this.time, 1000);
  }

  time = () => {
    if (this.state.count <= 0) {
      clearInterval(this.counterFunc);
      return;
    }
    this.setState({ count: this.state.count - 1 });
  };

  incrementScore = () => {
    this.setState({
      ScoreCount: this.state.ScoreCount + this.state.count
    });
  };

  render() {
    return (
      <div id="letsPlay">
        <NavBar displayScore={this.state.ScoreCount} />
        <p
          id="Countdown"
          onClick={() => {
            this.incrementScore();
          }}
          id={`${this.state.count}` <= 5 ? "blabla" : "count"}
        >
          Remaining time
          <br /> {this.state.count}
        </p>
        <div id="quizz">
          <div id="moviePict"></div>
          <div id="answer">
            <div>
              <button className="answerCase">Answer 1</button>
              <button className="answerCase">Answer 2</button>
            </div>
            <div>
              <button className="answerCase">Answer 3</button>
              <button className="answerCase">Answer 4</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LetsPlay;
