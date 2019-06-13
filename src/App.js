import React, { Component } from "react";
import Title from './Title';
import inventory, { categories } from "./inventory";
import "./App.css";
import Product from "./Product";
import CategoryButton from "./Category-Button";

class App extends Component {

  state = { currentCategory: null }
  render() {
    const cat = categories.map(cat => {
      return <CategoryButton
        key={cat}
        cat={cat}
        onClick={
          (cat) => this.setState({ currentCategory: cat })
        } />;

    });

    // expression ? value:value
    const item = inventory.filter((item) => {
      return item.category === this.state.currentCategory || this.state.currentCategory === null
    }).map((item, i) => {
      const { name, description, price } = item
      return (
        <Product
          key={`${name}-${i}`}
          title={name}
          desc={description}
          price={price}
          cat={this.category}
        />
      );
    });

    return (
      <div className="inventory" >
        <div className="catButtonContainer">{cat} </div>
        <div className="itemContainer">{item}</div>
      </div>
    );

    return (
      <div className="title" >
        < Title />

      </div>
    );

  }
}

export default App;
