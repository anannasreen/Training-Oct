import React from "react";

export default function Product() {

  return (
    <div className="p-4 border-4 wrapper border-indigo-5/1 ">
      <div>Shopping Cart: 0 total items.</div>
      <div>Total: 0</div>

      <div className="product">
        <span className="text-sm">Ice Cream</span>
      </div>

      <button className="text-xl border-4 border-black-5/1">Add</button>
      <button className="text-xl border-4 border-black-5/1">Remove</button>
    </div>
  );
}

