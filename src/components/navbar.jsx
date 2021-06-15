import React, { useState } from "react";
import { Link, NavLink, useRouteMatch } from "react-router-dom";

// Stateless Functional Component

export default function NavBar({ totalNum }) {
  const [routes] = useState([
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/cart",
      name: "Cart",
    },
    {
      link: "/products",
      name: "Products",
    },
  ]);
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid justify-content-start">
        <Link className="navbar-brand" to="/react-project-cart/cart">
          Counter{" "}
          <span className="badge badge-md rounded-pill bg-secondary">
            {totalNum}
          </span>
        </Link>
        {routes.map(({ link, name }, idx) => (
          <NavLink
            className="nav-link"
            activeClassName="nav-active"
            to={"/react-project-cart" + link}
            key={idx}
          >
            {name}
          </NavLink>
        ))}
        <a
          className="navbar-brand ms-auto"
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
}

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
