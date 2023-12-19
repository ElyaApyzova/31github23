import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h4>The cart is empty</h4>;

  return (
    <section className="py-4 container">
      <h5>
        {totalUniqueItems} {totalItems}
      </h5>
      <table className="table table-light table-hover m-0">
        <tbody>
          {items.map((item, id) => {
            return (
              <tr key={id}>
                <td>
                  <img
                    src={item.img}
                    style={{ height: "6rem" }}
                    alt={item.title}
                  />
                </td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <div>
          <h2>Total: ${cartTotal}</h2>
        </div>
        <div>
          <button onClick={emptyCart}>Empty</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
