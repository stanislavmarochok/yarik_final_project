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
                                        <input require="true" type="number" className='filter_input' placeholder='min' min={0}/>
                                        <input require="true" type="number" className='filter_input' placeholder='max' min={0}/>
                                    </div>
                                </div>

                                <div className='filter_block'>
                                    <p>Select city: </p>
                                    <select className='filter_select'>
                                        <option>Dnipro</option>
                                        <option>Lviv</option>
                                        <option>Kyiv</option>
                                        <option>Hmelnick</option>
                                    </select>
                                </div>
                            </nav>
                            
                            <button className='filter_button'>GO!</button>
                        
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
}

export default Filters;