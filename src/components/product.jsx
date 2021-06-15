import React, { Component } from "react";
import { useParams } from "react-router-dom";

export default function Product(props) {
  const { name } = useParams();
  const { original: products } = props;
  const product = products.filter((ele) => ele.name.toLowerCase() === name)[0];
  return (
    <div className="card">
      <img
        className="card-img-top img-fluid"
        height="300"
        src={product.image}
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
      </div>
    </div>
  );
}
