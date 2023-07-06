import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // function onCategoryChange(event) {
  //   setSelectedCategory(event.target.value);
  // }
  
  // old code above needed to become a callback function meaning the function in this case is passed into a function in the form of value in this case. If you are confused think of the syntax that fetch requests make as they wait for data just like 
  const onCategoryChange = (value) => setSelectedCategory(value);

  const itemsToDisplay = items.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <Filter
          onCategoryChange={onCategoryChange}
          selectedCategory={selectedCategory}
        />
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;