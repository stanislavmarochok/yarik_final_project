import React from "react";
import Filters from "./Filters";
import '../css/home.css';
import Item from "./Item";
import ItemsPanel from "./ItemsPanel";
import items from '../data.json';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      _items : items
    };
  }

  render(){
    return (
      <div className="home-container">
        <Filters applyFilters={this.applyFilters} />
        <ItemsPanel items={this.state._items} />
      </div>
    );
  }

  applyFilters = (filters) => {
    console.log('test apply filters');
    console.log(JSON.stringify(filters));

    let newItems = items;
    console.log(newItems);
    
    newItems = newItems.filter(item => filters.title && item.title.includes(filters.title));
    console.log(newItems);
    // newItems = newItems.filter(item => filters.priceMin && item.price >= filters.priceMin);
    // console.log(newItems);
    // newItems = newItems.filter(item => filters.priceMax && item.price <= filters.priceMax);
    // console.log(newItems);
    // newItems = newItems.filter(item => filters.location && item.location == filters.location);
    // console.log(newItems);

    this.setState({ _items : newItems });
  }
}

export default Home;
