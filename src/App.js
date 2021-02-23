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
        const menu = []

        fetch("http://127.0.0.1:8000/menu-items")
            .then(res => (res.json()))
            .then(result => this.setState({menu: result}))

        const order = [{}]
        this.setState({order});
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
