import React , {useState} from 'react';
import './Cappointment.css';
import DateAndTimePickers from './DateAndTimePickers.js';
import { useHistory } from "react-router-dom";
//τα απαραίτητα import στην αρχή χρησιμοποιώ history και το handleroute έτσι ώστε
//στο τέλος που ο χρήστης θα πατάει το κουμπί ακύρωσης να τον κάνει redirect στην αρχική σελίδα.
//μετά δημιουργώ το postid όπου θα πάρει το message και το status για να τα εμφανίσει στον χρήστη στο τέλος
//αφού πατήσει οριστική υποβολή.
//κάνω το json call με την μέθοδο post για να στείλω τα δεδομένα μου και κάνω fetch το url.
//στην φόρμα συμπλήρωσης στοιχείων δεν χρειάζεται να βάλω περιορισμούς. 
function Cappointment(){
  const history = useHistory();
  
  const handleRoute = () =>{ 
    history.push("/Mainpage");
  }    

  const [postId, setPostId] = useState("");
  const postRes = (data) => {
    setPostId({"Message": data.message, "Status": data.status})
  };
  const handleResponse = (e) =>{ 
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'React POST Request Example' })
  };
  fetch('https://us-central1-unipi-aps.cloudfunctions.net/emvolioDate', requestOptions)
    .then(response => response.json())
      .then(data => postRes(data));
}
    
  return(
        <div className="start">
        <h6>Τώρα μπορείς να κλείσεις το ραντεβού σου γρήγορα και εύκολα<br/> Απλά συμπληρώνεις τα στοιχεία σου στην παρακάτω φόρμα.</h6>            
          <DateAndTimePickers/>
          <p>Αν  η ημερομηνία δεν σας εξυπηρετεί πατήστε πάνω στο ημερολόγιο για αλλαγή του ραντεβού</p>
          <div className="wrapper">
           <form>
             <fieldset className="wrap">
                <label>
                    <p>Όνομα</p>
                   <input name="Fname"/>
                   <p>Επώνυμο</p>
                   <input name="Lname" />
                   <p>Τηλέφωνο</p>
                   <input name="phone" />
                   <p>email</p>
                   <input name="mail" />
                   <p>Φύλο</p>
                   <input name="gender" />
                   <p>ΑΜΚΑ</p>
                   <input name  ="amka" />
                </label>
             </fieldset>
            </form>
            <button type="submit" onClick={handleResponse}> Οριστική Υποβολή</button>
            <button type="submit" onClick={handleRoute}>Ακύρωση</button>
            <p>{postId["Message"]}<br/> {postId["Status"]}</p>
        </div>                    
        </div>
    );
}
export default Cappointment;
