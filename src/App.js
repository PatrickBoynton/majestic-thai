import './App.css';
import {Component} from "react";

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuItem: "",
        }
    }
    render() {
        const menuItems = this.props.menu?.map((items, index) => (
            <li key={index}>{items.item}: ${items.price} <button onClick={() => this.props?.click(index, this.props)}>Add to Cart</button></li>
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
            value: this.props.quantity,
            menuItem: "Burger"
        }
        console.log(this.props)
        this.handleChange = this.handleChange.bind(this);
    }
    //From the docs.
    handleChange(event) {
        // console.log(this.props.item);
        this.setState({value: event.target.value});
        console.log(this.props)
    }
    render() {
        const order = this.props.order?.map((items, index) =>
            <li key={index}>
                <h1>{this.props.item}</h1>
                <p>${this.props.price * this.state.value}</p>
                <input type="number" value={this.state.value} onChange={this.handleChange}/>
            </li>);
        return <ul>
                {order}
              </ul>;
    }
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItem: "Burger",
            menuPrice: 12.99,
            quantity: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const menu = [
            {item: "Pizza", price:"12.99"},
            {item: "Burger", price: "3.99"},
            {item: "Cake", price: "2.99"},
            {item: "Steak", price: "18.99"}
        ]
        const order = [{item: this.state.menuItem, quantity: 1, price: this.state.menuPrice}]

        this.setState({menu, order});
    }
    handleClick(index, props) {
        console.log(this.state.menuPrice)
        this.setState({menuItem: props?.menu[index].item, menuPrice: props?.menu[index].price});
    }
    render() {
    return (
        <div className="App">
            <Menu click={this.handleClick}
                  menu={this.state?.menu}
                  item={this.state?.menuItem}/>

            <Order order={this.state?.order}
                   menu={this.state?.menu}
                   item={this.state?.menuItem}
                   price={this.state?.menuPrice}
                   quantity={this.state?.quantity}
                   />
        </div>
    );
  }
}

export default App;
