import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Mainpage from './components/Mainpage/Mainpage';
import Newspage from './components/Newspage/Newspage';
import Cquestions from './components/Cquestions/Cquestions';
import Cappointment from './components/Cappointment/Cappointment';
import Cstatistics from './components/Cstatistics/Cstatistics';
import Ccontact from './components/Ccontact/Ccontact';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//κάνω import όλα τα components που έχω δημιουργήσει 
//επίσης πρέπει να κάνω import το switch k route για να μπορέσει
//να κάνει την αλλαγή στην σωστή σελίδα

function App() {
  return (
    <Router>
      <div><Navbar/></div> 
        <Switch>
          <Route path="/Mainpage">
          <Mainpage />
          </Route>
          <Route path="/News">
            <Newspage />
          </Route>
          <Route path="/Questions">
            <Cquestions />
          </Route>
          <Route path="/Appointment">
            <Cappointment />
          </Route>
          <Route path="/Statistics">
            <Cstatistics />
          </Route>
          <Route path="/Contact">
            <Ccontact />
          </Route>
        </Switch>
    </Router>
  );
}
//μέσα στο return χρησιμοποιώ το switch για να αλλάξει κατεύθυνση το route 
//και να πάει στην σελίδα που χρειάζεται και βάζω μέσα και τον
//component πχ Mainpage.

export default App;