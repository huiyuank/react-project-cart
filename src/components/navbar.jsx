import React, { Component } from "react";

// Stateless Functional Component

const NavBar = ({ totalNum }) => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Counter{" "}
          <span className="badge badge-md rounded-pill bg-secondary">
            {totalNum}
          </span>
        </a>
        <a
          className="navbar-brand"
          href="https://github.com/huiyuank/react-project-cart"
        >
          <i
            id="githubIcon"
            className="bi-github text-secondary"
            role="img"
            aria-label="GitHub"
          ></i>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar{" "}
//           <span className="badge badge-md badge-pill badge-secondary">
//             {this.props.totalNum}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// export default NavBar;
