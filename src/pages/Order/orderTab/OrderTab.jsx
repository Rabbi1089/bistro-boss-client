import React from 'react';
import FoodCard from '../../../components/foodCard/FoodCard';


const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {items.map((item) => (
          <FoodCard key={item.Id} item={item}></FoodCard>
        ))}
      </div>
    );
};

export default OrderTab;