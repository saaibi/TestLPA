import React, {Component} from 'react';
import {connect} from "react-redux";
import {counterSum, counterRes} from "./actions/counter.action"

class App extends Component {
  state = {
    count: 0
  }

  sum = () => {
    this
      .props
      .dispatch(counterSum());
  }

  res = () => {
    this
      .props
      .dispatch(counterRes());
  }

  render() {
    return (
      <div>
        <button onClick={() => this.res()}>
          -
        </button>
        <p>{this.props.counter}</p>
        <button onClick={() => this.sum()}>
          +
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {counter: state.counterReducer}
}

export default App = connect(mapStateToProps)(App);
