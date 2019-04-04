import React, { Component } from "react";
import inventory, { categories } from "./inventory";
import "./App.css";
import Product from "./Product";

class App extends Component {
  render() {
    const cat = categories.map(cat => {
      return <button key={cat}>{cat} </button>;
    });

    const item = inventory.map(item => {
      return (
        <Product
          key={1}
          title={item.name}
          desc={item.description}
          price={item.price}
        />
      );
    });

    return (
      <div className="inventory">
        <div>{cat} </div>
        <div className="itemContainer">{item}</div>
      </div>
    );
  }
}

export default App;
