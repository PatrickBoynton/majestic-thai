import { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuItem: "",
        }
    }

    render() {
        const menuItems = this.props.menu?.map((items, index) => (
            <li key={index}>{items.item}: ${items.price}
                <button onClick={() => this.props?.click(index, this.props)}>Add to Cart</button>
            </li>
        ));
        return (<ul className="menu">
            {menuItems}
        </ul>);
    }
}


export default Menu;