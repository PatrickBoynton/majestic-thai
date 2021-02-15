import { Component } from 'react';

class Nav extends Component {
    render() {
        return <nav>
                    <ul>
                        <li><a href="#">Home</a> </li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Cart</a></li>
                    </ul>
               </nav>
    }
}


export default Nav;