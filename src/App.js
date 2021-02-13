import './App.css';
import {Component} from "react";

class Menu extends Component {

    render() {
        const menuItems = this.props.menu?.map((items, index) => (
            <li key={index} onClick={() => console.log(items.item)}>{items.item}: ${items.price}</li>
        ));
      return (<ul>
                {menuItems}
            </ul>);
    }
}

class Order extends Component{

    render() {
        return <p>Order</p>;
    }
}


class App extends Component {

    componentDidMount() {
        const menu = [
            {item: "Pizza", price:"12.99"},
            {item: "Burger", price: "3.99"},
            {item: "Cake", price: "2.99"},
            {item: "Steak", price: "18.99"}
        ]

        this.setState({menu});
    }

    render() {
    return (
        <div className="App">
            <Menu menu={this.state?.menu}/>
            <Order/>
        </div>
    );
  }
}

export default App;
