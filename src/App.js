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
        const order = this.props.order?.map((items, index) =>
            <li key={index}>
                <h1>{items.item}</h1>
                <p>${items.price(3.99, items.quantity)}</p>
                <input value={items.quantity}/>
            </li>);
        return <ul>
                {order}
              </ul>;
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
        const order = [
            {item: "Burger", quantity: 5, price: (price,  quantity) => (price * quantity)}
        ]
        this.setState({menu, order});
    }

    render() {
    return (
        <div className="App">
            <Menu menu={this.state?.menu}/>
            <Order order={this.state?.order} menu={this.state?.menu}/>
        </div>
    );
  }
}

export default App;
