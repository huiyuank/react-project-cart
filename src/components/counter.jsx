import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  //// This piece of code is executed ONLY once when instance of Counter component is created.
  // state = {
  //   value: this.props.counter.value,
  // };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //// ***IMPORTANT! You cannot increment a state value by itself. Need to call this.setState()!
  // handleIncrement = () => {
  //// ***IMPORTANT! You also cannot increment a props value. Need to import it as state before altering!
  //// eg. this.props.counter.value += 1
  //   this.setState((state) => {
  //     return { value: state.value + 1 };
  //   });
  // };

  // handleDecrement = () => {
  //   this.setState((state) => {
  //     return { value: Math.max(0, state.value - 1) };
  //   });
  // };

  // React will schedule a call to the render method, so
  // at some point in the future we don't know when, the
  // method will be called (asynchronous function)
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    // Using componentDidUpdate, we can decide based on prevProps and prevState if we want to use AJAX to call server to update data
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Rendered");
    return (
      <div>
        <section className="btn-group-vertical btn-group-sm">
          {/* Increment button here */}
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-success p-1 mx-2 my-1"
          >
            <i className="bi-chevron-up" role="img" aria-label="Increment"></i>
          </button>

          {/* Item count here */}
          <button className={this.getBadgeClasses()} disabled>
            {this.formatCount()}
          </button>

          {/* Decrement button here */}
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-danger p-1 mx-2 my-1"
          >
            <i
              className="bi-chevron-down"
              role="img"
              aria-label="Decrement"
            ></i>
          </button>
        </section>

        <button
          // ***IMPORTANT! Use inline function in order to pass arguments into the method
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm mx-4 my-5"
        >
          <i className="bi-trash-fill" role="img" aria-label="Delete"></i>
          {/* Delete */}
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "btn custom-button mx-2 p-2 btn-";
    classes += this.props.counter.value === 0 ? "warning" : "dark";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
