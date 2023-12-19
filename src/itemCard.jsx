import React from "react";
import { useCart } from "react-use-cart";

export const ItemCard = (props) => {
  const { addItem } = useCart();

  return (
    <div>
      <div className="card" style={styles}>
        <img src={props.img} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card-price">${props.price}</h5>
          <h6 className="card-title">{props.desc}</h6>
          <button className="btn-success" onClick={() => addItem(props.item)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  width: "200px",
};
