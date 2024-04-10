import React from "react";

function Home({ addToCartHandler, removeFromCartHandler }) {
  return (
    <div className="details box-border w-fit  my-5 p-2 border border-green-500 flex justify-start items-center gap-6">
      <p className="name box-border">Jio Bharat</p>
      <p className="price box-border">Rs 2100</p>
      <button
        className="button box-border bg-yellow-500 p-2 rounded"
        onClick={() => {
          addToCartHandler({
            name: "jio bharat",
            price: "rs 2100",
            itemId: "jio bharat",
          });
        }}
      >
        Add to Cart
      </button>

      <button
        className="button box-border bg-red-500 p-2 rounded"
        onClick={() => {
          removeFromCartHandler({
            name: "jio bharat",
            price: "rs 2100",
            itemId: "jio bharat",
          });
        }}
      >
        Remove From Cart
      </button>
    </div>
  );
}

export default Home;
