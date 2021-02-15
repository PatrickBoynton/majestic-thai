import './App.css';
import {Component} from "react";
import Order from './components/Order';
import Menu from './components/Menu';
import Nav from './components/Nav';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItem: "Add Item to Cart",
            order: []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const menu = [
            {item: "Curry", price: "4.99"},
            {item: "Sweet and Sour", price: "5.99"},
            {item: "Pad Thai", price: "8.99"},
            {item: "Cake", price: "2.99"}
        ]
        const order = [{}]

        this.setState({menu, order});
    }

    handleClick(index, props) {
        this.setState({
            [this.state.order]: [{
                items: [{item: this.props[index]?.menuItem, price: this.props[index]?.price}],
                quantity: 1,
                price: this.props[index]?.menuPrice
            }],
            menuItem: props?.menu[index].item,
            menuPrice: props?.menu[index].price, quantity: 1,
        });
        // this.state.order.push({item: this.props[index]?.item, price: this.props[index]?.price});
    }

    render() {
        return (
            <>
                <Nav/>
                <h1>Majestic Thai</h1>
            <div className="App">
                <Menu className="card"
                      click={this.handleClick}
                      menu={this.state?.menu}
                      item={this.state?.menuItem}/>

                <Order order={this.state?.order}
                       menu={this.state?.menu}
                       item={this.state?.menuItem}
                       price={this.state?.menuPrice}
                       quantity={this.state?.quantity}
                />
            </div>
            </>
        );
    }
}

export default App;
