import React from "react";

export default function Product(props) {
  return (
    <div className="container w-100">
      <div className="row mt-2">
        <div className="col-md-2 col-12">
          <h4>{props.product.name}</h4>
        </div>

        <div className="col-md-2 col-6">
          <h4 className="float-start">
            <span className="badge bg-secondary"> {props.product.price} </span>
          </h4>
        </div>

        <div className="col-md-2 col-6">
          <h5 className="float-md-start float-end">
            {props.product.quantity * props.product.price}
          </h5>
        </div>

        <div className="col-md-2 col-6 float-start">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                props.minusQuant(props.index);
              }}
            >
              {" "}
              -{" "}
            </button>
            <button type="button" className="btn btn-white">
              {props.product.quantity}
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                props.plusQuant(props.index);
              }}
            >
              {" "}
              +{" "}
            </button>
          </div>
        </div>

        <div className="col-md-2 col-6 float-end">
          <button
            className="btn btn-danger float-end"
            onClick={() => {
              props.removeItem(props.index);
            }}
          >
            Remove
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}
