import "./App.css";
import logo from "./images/logo.jpeg";
import { useState } from "react";

function Cart() {
  return <button className="cartStyling"> View cart </button>;
}

function Square({ value }) {
  return <button className="square">{value}</button>;
}
function Board() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const products = [
    { title: "Cabbage", amount: "2euro", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];

  const listItems = products.map((product) => (
    <li key={product.id}>
      {product.title} {product.amount}
    </li>
  ));

  return (
    <>
      <Cart /> <br></br>
      <br></br>
      <img src={logo} alt="ashleys logoS" width={300} height={200} />
      <h1>Ashleys watch shop, come and shop around</h1>
      <ul>{listItems}</ul>
      <button onClick={incrementCount}>Clicked {count} times</button>
      <button onClick={incrementCount}>Clicked {count} times</button>
      <br></br>
      <br></br>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}

export default Board;
///
