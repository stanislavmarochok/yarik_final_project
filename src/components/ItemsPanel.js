import React from "react";
import '../css/items-panel.css';
import Item from "./Item";

class ItemsPanel extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
      return (
        <div className="items-panel-container">
            {this.renderItems()}
        </div>
      );
    }
    
    renderItems = () => {
      let items = this.props.items;
      return <>
          {items.map((item, idx) => {
            return <Item key={`item-${idx}`} item={item} />;
          })}
      </>;
    }
}

export default ItemsPanel;
