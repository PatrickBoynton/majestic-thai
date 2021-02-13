import './App.css';
import {Component} from "react";

class Menu extends Component {

    render() {
        const menuItems = this.props.menu?.map((items, index) => (
            <li onClick={this.props.click} key={index}>{items.item}: ${items.price}</li>
        ));
      return (<ul>
                {menuItems}
            </ul>);
    }
}

class Order extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value})
    }
    render() {
        const menu = this.props.menu?.map(menuItem => menuItem);
        const order = this.props.order?.map((items, index) =>
            <li key={index}>
                <h1>{menu[1].item}</h1>
                <p>${items.price(menu[1].price, this.state.value).toFixed(2)}</p>
                <input type="number" value={this.state.value} onChange={this.handleChange}/>
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
            {item: "Burger", quantity: 0, price: (price,  quantity) => (price * quantity)}
        ]
        this.setState({menu, order});
    }

    handleClick() {
        console.log("Clicked!")
    }

    render() {
    return (
        <div className="App">
            <Menu menu={this.state?.menu}/>
            <Order click={this.handleClick} order={this.state?.order} menu={this.state?.menu}/>
        </div>
    );
  }
}

export default App;
