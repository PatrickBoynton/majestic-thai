import './App.css';
import {Component} from "react";
import Order from './components/Order';
import Menu from './components/Menu';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItem: "Add Item to Cart",
            menuPrice: 0,
            quantity: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const menu = [
            {item: "Pizza", price: "12.99"},
            {item: "Burger", price: "3.99"},
            {item: "Cake", price: "2.99"},
            {item: "Steak", price: "18.99"}
        ]
        const order = [{item: this.state.menuItem, quantity: 0, price: this.state.menuPrice}]

        this.setState({menu, order});
    }

    handleClick(index, props) {
        this.setState({
            [this.state.order]: [{
                items: this.props[index]?.menuItem,
                quantity: 1,
                price: this.props[index]?.menuPrice
            }], menuItem: props?.menu[index].item,
            menuPrice: props?.menu[index].price, quantity: 1
        });
        console.log(this.props.order);
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
