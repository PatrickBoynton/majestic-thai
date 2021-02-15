import {Component} from 'react';

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            value: 1,
            menuItem: "",
            quantity: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    //From the docs.
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleClick = () => {
        alert(`Your order of ${this.state.value} ${this.props.item} for a price of ${this.props.price * this.state.value}, will be ready in ${Math.round(Math.random() * 25) + 5} minutes.`)
        localStorage.setItem("order", JSON.stringify({item: this.props?.item, quantity: this.state.value, price: (this.props.price * this.state.value)}));
    }

    render() {
        const order = this.props.order?.map((items, index) =>
            <li key={index}>
                <h1>{this.props.item}</h1>
                <p>${this.props.price * this.state.value || 0}</p>
                <input type="number" value={this.state.value} onChange={this.handleChange}/>
            </li>);
        return <>
            <ul>
                {order}
            </ul>
            <button onClick={this.handleClick} className="btn">Order Now!</button>
        </>;
    }
}

export default Order;