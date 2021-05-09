import React, { Component } from "react";
import Counter from "./counter.jsx";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    const {
      onReset,
      onDelete,
      onIncrement,
      onDecrement,
      counters,
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((c) => (
          <Counter
            key={c.id}
            counter={c}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
