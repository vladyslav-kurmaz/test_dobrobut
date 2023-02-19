import { Component } from 'react';
import { Link } from 'react-router-dom';

import './item.scss';



class Item extends Component {


    onItemClick = (e, key, title) => {
        e.preventDefault();
        if (key && title) {
            this.props.updateKey(key, title)
        }
        
    }

    render() {
        const {data} = this.props;
        const path = data.link ? data.link : data.key

        return (
            <li className="main__services-item" 
                onClick={(e) => this.onItemClick(e, data.key, data.title)}>
                    <Link to={`${path}`}>{data.title}</Link>
            </li>
        )
    }
    
}

export default Item;