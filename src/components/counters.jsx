import React, { Component } from "react";
import Counter from "./counter.jsx";
import PropagateLoader from "react-spinners/PropagateLoader";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    const { onReset, onDelete, onIncrement, onDecrement, counters, loading } =
      this.props;
    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm my-4 ms-2"
          disabled={loading ? "true" : ""}
        >
          {!loading ? (
            "Reset"
          ) : (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          )}
        </button>
        {loading ? (
          <div className="loading-spinner">
            <PropagateLoader
              size={30}
              color="grey"
              loading={this.props.loading}
              speedMultiplier={2}
            />
          </div>
        ) : (
          counters.map((c) => (
            <Counter
              key={c.id}
              counter={c}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    );
  }
}

export default Counters;
