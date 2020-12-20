import React, { useState } from 'react';

const Categories = React.memo(
  function Categories({items, onClickItem}){

    const [activeItem, setActiveItem] = useState(0);

    const onSelectItem = (index) => {
      setActiveItem(index);
      onClickItem(index)
    }

    return (
      <div className="categories">
        <ul>
          {items && items.map((elem, index) => (
            <li className={activeItem === index ? 'active' :''} onClick={() => {onSelectItem(index)}} key={`${elem}_${index}`} >{elem}</li>
          ))}
        </ul>
      </div>
    );
}
);

export default Categories;