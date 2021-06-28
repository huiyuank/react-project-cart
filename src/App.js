import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters.jsx";
import Products from "./components/products.jsx";
import Product from "./components/product.jsx";
import NavBar from "./components/navbar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// function App() {
class App extends Component {
  state = {
    counters: [
      { id: 1, name: "Cupcakes", value: 4 },
      { id: 2, name: "Cookies", value: 0 },
      { id: 3, name: "Brownies", value: 0 },
      { id: 4, name: "Tarts", value: 0 },
    ],
    original: [
      {
        id: 1,
        name: "Cupcakes",
        image:
          "https://images.unsplash.com/photo-1599785209615-a35f883d93c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
        value: 0,
      },
      {
        id: 2,
        name: "Cookies",
        image:
          "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        value: 0,
      },
      {
        id: 3,
        name: "Brownies",
        image:
          "https://images.unsplash.com/photo-1612886623532-1802833fcc67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        value: 0,
      },
      {
        id: 4,
        name: "Tarts",
        image:
          "https://images.unsplash.com/photo-1616031036658-1f2d8258eca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1042&q=80",
        value: 0,
      },
    ],
    loading: false,
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    // Perfect place to make AJAX calls to the server to get data.
    console.log("App - Mounted");
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    // Duplicate the counters in a new array
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value += 1;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = this.state.counters.map((c) => {
      // counters[index].value = Math.max(val - 1, 0);
      c.value = c === counter ? Math.max(c.value - 1, 0) : c.value;
      return c;
    });
    this.setState({ counters });
  };

  handleReset = () => {
    // const counters = this.state.counters.map((c) => {
    //   c.value = 0;
    //   return c;
    // });
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ counters: this.state.original, loading: false });
    }, 800);
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <Router>
          <NavBar
            totalNum={this.state.counters.filter((c) => c.value > 0).length}
          />
          <Switch>
            <React.Fragment>
              <main className="container-fluid">
                <Route path={`/react-project-cart/products/:name`}>
                  <Product original={this.state.original} />
                </Route>
                <Route exact path={`/react-project-cart/products`}>
                  <Products original={this.state.original} />
                </Route>
                <Route path={`/react-project-cart/cart`}>
                  <Counters
                    counters={this.state.counters}
                    loading={this.state.loading}
                    onDelete={this.handleDelete}
                    onReset={this.handleReset}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                  />
                </Route>
                <Route exact path="/react-project-cart">
                  <Home />
                </Route>
              </main>
            </React.Fragment>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

const Home = () => {
  return (
    <div id="home-container" className="mt-4 text-center">
      <h1 className="display-3">React Bakery</h1>
      <h3 className="fw-light">
        A bakery that only sells cupcakes, cookies, brownies and tarts.
      </h3>
    </div>
  );
};

export default App;
