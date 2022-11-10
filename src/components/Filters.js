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

                        </div>
                    </div>
                </Collapse>
                <div 
                    className="filters-container-open-close-button"
                    onClick={this.openCloseFilters}>
                        <div 
                            style={{ transform: `rotate(${this.state.isFilterOpened ? '180deg' : '0deg' })` }}
                            className="filters-container-open-close-button-arrow"></div>
                    </div>
            </div>
        );
    }
}

export default Filters;