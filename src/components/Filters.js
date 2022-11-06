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
        console.log('test');
        this.setState({ isFilterOpened: !this.state.isFilterOpened });
    }

    render(){
        return (
            <div>
                <Collapse isOpened={this.state.isFilterOpened}>
                    <div className="filters-container" onClick={this.openCloseFilters}>

                    </div>
                </Collapse>
            </div>
        );
    }
}

export default Filters;