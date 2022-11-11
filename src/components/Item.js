import React from 'react';
import '../css/item.css';

class Item extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let item = this.props.item;

        return <>
            <a href={`${item.href}`} className="item-container-link">
                <div className="item-container">
                    <div
                        style={{ backgroundImage: `url('${this.getPhotoFullPath(item.photo)}')` }}
                        className="item-photo"></div>
                    <div className="item-short-description-container">
                        <div className="item-name">{item.name}</div>
                        
                        <div className='item-sub-container'> 
                            <div className="item-location"><p>{item.location}</p></div>
                            <div className="item-price"><span>{item.price}</span></div>
                        </div>
                    </div>
                </div>
            </a>
        </>;
    }

    getPhotoFullPath(photo){
        return `../images/houses/${photo}`;
    }
}

export default Item;