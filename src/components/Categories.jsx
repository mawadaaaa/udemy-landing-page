import React from "react";
import { categories } from "../data/dummyData";

export function Categories() {
  return (
    <section className="categories">
      <h3>Top Categories</h3>
      <div className="categories-grid">
        {categories.map(cat => (
          <div key={cat.id}>
            <img src={cat.img} alt={cat.title} />
            <p>{cat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
