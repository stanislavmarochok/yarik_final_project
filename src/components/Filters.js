import React from 'react';
import { Collapse } from 'react-collapse';
import '../css/filters.css';

class Filters extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isFilterOpened: true
        };

        this.openCloseFilters = this.openCloseFilters.bind(this);
    }

    openCloseFilters = () => {
        this.setState({ isFilterOpened: !this.state.isFilterOpened });
    }

    render(){
        return (
            <div className='filters-container'>
                <Collapse 
                    isOpened={this.state.isFilterOpened}
                    initialStyle={{ transition: "250ms" }}
                    className="filters-container-collapse">
                    <div className="filters-container-main">
                        <div className="filters-container-content">
                            <nav>
                                <div className='filter_block'>
                                    <p>Sort by price: </p>
                                    <div className='filter_inputs'>
                                        <input require="true" type="number" className='filter_input' id="priceMin" placeholder='min' min={0}/>
                                        <input require="true" type="number" className='filter_input' id="priceMax" placeholder='max' min={0}/>
                                    </div>
                                </div>

                                <div className='filter_block'>
                                    <p>Select city: </p>
                                    <select className='filter_select' id="location">
                                        <option></option>
                                        <option>Dnipro</option>
                                        <option>Lviv</option>
                                        <option>Kyiv</option>
                                        <option>Hmelnick</option>
                                    </select>
                                </div>

                                <div className='filter_block'>
                                    <input 
                                        type="text"
                                        id="title" 
                                        placeholder="Search by title"/>
                                </div>
                            </nav>
                            
                            <button onClick={this.applyFilters} className='filter_button'>GO!<p>AHEAD!</p></button>
                        
                        </div>
                    </div>
                </Collapse>
                <div 
                    className="filters-container-open-close-button"
                    onClick={this.openCloseFilters}>

                        <div 
                            style={{ transform: `rotate(${this.state.isFilterOpened ? '180deg' : '0deg' })` }} 
                            className="filters-container-open-close-button-arrow">

                        </div>
                    </div>
            </div>
        );
    }

    applyFilters = () => {
        let filters = {
            priceMin: document.getElementById('priceMin').value,
            priceMax: document.getElementById('priceMax').value,
            location: document.getElementById('location').value,
            title: document.getElementById('title').value
        };

        this.props.applyFilters(filters);
    }
}

export default Filters;