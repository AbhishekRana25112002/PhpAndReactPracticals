import ReactDOM from 'react-dom/client';
import './index.css';
import Garage from './App';
import reportWebVitals from './reportWebVitals';
import React, { useState , Component} from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  render() {
    return (
      <>
        <h1>Count is {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
        <button onClick={()=>this.setState({
          count:this.state.count?this.state.count-1:0
        })}>Decrement</button>
      </>
    );
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Counter/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
