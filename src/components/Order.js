import {Component} from 'react';

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: [],
            value: 1,
            menuItem: "Add item to cart",
            quantity: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    //From the docs.
    handleChange(event) {
        console.log(this.props.quantity)
        this.setState({value: event.target.value});
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

export default Order;