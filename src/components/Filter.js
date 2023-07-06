import React from "react";

function Filter({ onCategoryChange, selectedCategory }) {

    // our callback function onCategoryChange is passed into a variable which is evoked like when this was all one file. Notice it looks similar and accomplishes what was done before in ShoppingList.js
    // function onCategoryChange(event) {
    //   setSelectedCategory(event.target.value);
    // }
  const handleChange = (event) => onCategoryChange(event.target.value);

  return (
    <div className="Filter">
      <select name="filter" value={selectedCategory} onChange={handleChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;