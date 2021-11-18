import React , {Component} from 'react';
import './Navbar.css';
import {MenuItems} from './MenuItems';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

//κάνω import τα items για το navbar και κάνω ένα map για να διατρέξει όλα τα στοιχεία 
//και να μπορέσω να χησιμοποιήσω τα title,url,cName για το κάθε item
//και στο τέλος κάνω export την navbar για να την χρησιμοποιήσω όπου την χρειαστώ.
class Navbar extends Component {
    render(){
        return(
            <Router>
                <nav className="NavbarItems">
                    <ul className="nav-items">
                        {MenuItems.map((item,index) =>{
                            return(
                                <li key={index}><a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                                <Link to={item.url}></Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </Router>
        );
    }
}
export default Navbar;
