import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Products(props) {
  const { original } = props;
  return (
    <div className="card-deck text-center row row-cols-1 row-cols-md-2 g-4">
      {original.map(({ id, image, name }) => (
        <div className="col" key={id}>
          <div className="card">
            <img
              className="card-img-top img-fluid"
              height="300"
              src={image}
              alt={name}
            />
            <div className="card-body">
              <Link
                className="navbar-brand"
                to={"/react-project-cart/products/" + name.toLowerCase()}
              >
                <h5 className="card-title">{name}</h5>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
