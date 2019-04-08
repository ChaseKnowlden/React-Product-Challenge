import React from "react";
import "./CategoryButton.css";

// { key:'', cat:""}

// <CategoryButton cat="Cat" />
// <CategoryButton cat="WORLD" />

const CategoryButton = ({ onClick, cat }) => {
  return (
    <button className="CategoryButton"
      onClick={(e) => onClick(cat)
      }>
      {cat}
    </button >
  );
};

export default CategoryButton;
