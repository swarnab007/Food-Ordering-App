import React from "react";
import { StoreContext } from "../context/StoreContext";
import CardItem from "./CardItem";

const FoodItems = ({ category }) => {
  const { food_list } = React.useContext(StoreContext);

  return (
    <div className="food-items mt-6">
      <h2 className="text-white text-3xl font-bold ml-24">Top Dishes Near You</h2>
      <div className="food-items-list gap-8 p-20 grid lg:grid-cols-4 mt-8 sm:grid-cols-1">
        {food_list.map((food, index) => {
          // if no category is selected, show all items or show items based on category
          if (category === "all" || food.category === category) {
            return (
              <CardItem 
                key={index}
                id={food._id}
                name={food.name}
                image={food.image}
                price={food.price}
                desc={food.description}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodItems;
