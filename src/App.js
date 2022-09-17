import "./App.css";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import React, { useState } from "react";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

function App() {
  // const products = [
  //   {
  //     price: 9999,
  //     name: "IPhone S Pro",
  //     quantity: 0,
  //   },
  //   {
  //     price: 999,
  //     name: "IPhone Cover",
  //     quantity: 0,
  //   },
  // ];

  let [productList, setProductList] = useState("");
  let [totalAmount, setTotalAmount] = useState(0);

  const plusQuant = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const minusQuant = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const resetQuant = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;

      return products;
    });

    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    console.log(newProductList);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setProductList(newProductList);
  };

  return (
    <>
      <NavBar />
      <main className="container mt-5">
        <AddItem addItem={addItem} />
        <ProductList
          productList={productList}
          plusQuant={plusQuant}
          minusQuant={minusQuant}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuant={resetQuant} />
    </>
  );
}

export default App;
