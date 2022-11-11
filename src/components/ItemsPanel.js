import React from "react";
import '../css/items-panel.css';
import Item from "./Item";
import items from '../data.json';


function ItemsPanel() {
  return (
    <div className="items-panel-container">
        {renderItems()}
    </div>
  );
}

function renderItems(){
  let items = getItems();
  return <>
      {items.map((item, idx) => {
        return <Item key={`item-${idx}`} item={item} />;
      })}
  </>;
}

function getItems(){
    return items;
}

export default ItemsPanel;
