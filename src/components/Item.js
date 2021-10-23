import React from "react";
// import {items} from "../data/items.js";
import { useState } from 'react'


function Item({ name, category }) {
  const [addItem, setAddedItems] = useState(true)
  


  function handleClick({items}) {
 
  setAddedItems((addItem) => !addItem)

  setCart((inCart) => !inCart)
  }


const [inCart, setCart] = useState(true)

  

  return (
    <li className={inCart ? "" : "in-cart"} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{!addItem ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
