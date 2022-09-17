import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  // console.log(props)
  return props.productList.length > 0 ? (
    props.productList.map((product, i) => {
      return (
        <Product
          product={product}
          key={i}
          plusQuant={props.plusQuant}
          index={i}
          minusQuant={props.minusQuant}
          removeItem={props.removeItem}
        />
      );
    })
  ) : (
    <>
     <img className="w-100" src="https://th.bing.com/th/id/R.f1528bed033b1bb03b8f2be6e0e44bbc?rik=w1D%2b0BC7Mw29sQ&riu=http%3a%2f%2faromasian.com%2fwp-content%2fuploads%2f2017%2f10%2fblack-market-1.jpg&ehk=1V1Vx3fZdOjgZ1x0S6ROh1sSM2YIJiEbS2w3wn95WNQ%3d&risl=&pid=ImgRaw&r=0" alt="" />
     </>
  );
}
