import React from "react";

class Test1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    console.log(this.state)
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      return this.tick(), 1000;
    });
  }
  componentWillUnmount() {
      clearInterval(this.timerID);
  }
  tick() {
      this.setState({
          date: new Date()
      })
  };
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Test1;
