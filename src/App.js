import './App.css';
import {Component} from "react";

class Menu extends Component {
  constructor(props) {
    super(props);
  }

}

class Order extends Component{
    constructor(props) {
        super(props);
    }
}


class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const menu = [
            {item: "Pizza", price:"12.99"},
            {item: "Burger", price: "3.99"},
            {item: "Cake", price: "2.99"},
            {item: "Steak", price: "18.99"}
        ]
    }

    render() {
    return (
        <div className="App">
            <Menu/>
            <Order/>
        </div>
    );
  }
}

export default App;
