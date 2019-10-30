import React from "react";
import NavBar from "./NavBar";
import "./style/LetsPlay.scss";
import GetMovie from "./GetMovie";

class LetsPlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ScoreCount: 0,

      blurTab: [
        [true, true, true],
        [true, true, true],
        [true, false, true],
        [true, true, true]
      ],
      count: 20
    };
    this.counterFunc = setInterval(this.time, 1000);
  }

  componentDidMount() {
    for (let k = 2000; k <= 20000; k = k + 2000) {
      setTimeout(() => {
        let i = Math.floor(Math.random() * 4);
        let j = Math.floor(Math.random() * 3);
        this.blurFunction(i, j);
      }, k);
    }
  }

  time = () => {
    if (this.state.count <= 0) {
      clearInterval(this.counterFunc);
      return;
    }
    this.setState({ count: this.state.count - 1 });
  };

  timeReset = () => {
    this.setState({
      count: 20
    });
  };

  incrementScore = () => {
    this.setState({
      ScoreCount: this.state.ScoreCount + this.state.count
    });
    clearInterval(this.counterFunc);
    this.counterFunc = setInterval(this.time, 1000);
  };

  wrong = () => {
    this.setState({
      ScoreCount: this.state.ScoreCount - 5
    });
  };

  blurFunction = (i, j) => {
    let arr = this.state.blurTab;
    arr[i][j] = false;
    this.setState({ blurTab: arr });
    console.log(i, j);
  };

  render() {
    return (
      <div className="letsPlay">
        <NavBar
          displayScore={this.state.ScoreCount}
          Scoring={this.incrementScore}
        />
        <p
          id="Countdown"
          id={`${this.state.count}` <= 5 ? "hurryCount" : "count"}
        >
          Remaining time
          <br /> {this.state.count}
        </p>

        <GetMovie
          wrong={this.wrong}
          incrementScore={this.incrementScore}
          timeReset={this.timeReset}
          time={this.time}
        />

        <div className="container">
          <div className="blurTab">
            {this.state.blurTab.map(row =>
              row.map(column => {
                return (
                  <div className={column === true ? "blur" : "noBlur"}></div>
                );
              })
            )}
          </div>
          <GetMovie className="quizz"></GetMovie>
        </div>

      </div>
    );
  }
}

export default LetsPlay;
