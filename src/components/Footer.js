import React from "react";

export default function Footer(props) {
  // console.log(props)
  return (
    <div className="row fixed-bottom mx-1 pb-md-2">
      <div className="col-md-1 col-0"></div>
      <button
        className="btn btn-danger mx-1 col-4 col-md-3 m-md-2"
        onClick={() => {
          props.resetQuant();
        }}
      >
        Reset
      </button>
      <div className="btn btn-dark mx-1 col-md-4 col-3 text-black bg-light m-md-2">
        <h4>{props.totalAmount}</h4>
      </div>
      <button className="btn btn-primary mx-1 col-md-3 col-4 m-md-2">Pay Now</button>
    </div>
  );
}
