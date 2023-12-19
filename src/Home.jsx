import React from "react";
import { ItemCard } from "./ItemCard";
import { data } from "./data";

export function Home() {
  return (
    <>
      <h1 className="text-center mt-3">All goods</h1>
      <section className="py-4 container">
        <div style={styles}>
          {data.productName.map((item, id) => {
            return (
              <ItemCard
                img={item.img}
                item={item}
                title={item.title}
                desc={item.desc}
                price={item.price}
                key={id}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

const styles = {
  display: "flex",
  justifyContent: "space-between",
};
