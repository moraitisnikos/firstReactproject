import React , {Component} from 'react';
import './Newspage.css';
import firstchapter from './firstchapter.png'
import secondchapter from './secondchapter.png';

class Newspage extends Component{
    render(){
        return(
            <div>
                <h3>Ενημέρωση διαπιστευμένων συντακτών για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της COVID-19</h3>
                    <p>Το κύριο πλεονέκτημα, είναι το μονοδοσικό, ότι το εμβόλιο αυτό γίνεται με μία δόση. Η προστασία του εμβολίου με τη μία δόση, <br/>αρχίζει μετά από 14 ημέρες, ενώ η αποτελεσματικότητά του όπως έχει φανεί,<br/> έναντι των σοβαρών επιπτώσεων της νόσου Covid, εκδηλώνεται μετά τις 28 ημέρες και εκτιμάται ότι είναι της τάξεως του 85%, ενώ<br/> μετά από 49 ημέρες προστατεύει σχεδόν πλήρως <br/>και από τις εισαγωγές στο Νοσοκομείο και από το θάνατο</p>
                    <img src={firstchapter} className="chapter" alt="Emvolio"/>
            <h3>Ενημέρωση για κρούσμα μεταλλαγμένου στελέχους</h3>
            <p>Τα μέχρι στιγμής δεδομένα από τη φυλογενετική ανάλυση, υποδηλώνουν ότι το στέλεχος Β.1.617 που ανιχνεύθηκε <br/>χωρίς τη μετάλλαξη Ε484Q έχει προέλευση από τις Η.Π.Α. και συγκεκριμένα την πολιτεία της Καλιφόρνια.</p>
            <img src={secondchapter} className="chaptersecond" alt="Emvolio"/>
            </div>
        );
    }
}
export default Newspage;
//εδώ φτιάχνω την σελίδα με τα νέα και απλά βάζω κάποια νέα που βρήκα απο την επίσημη σελίδα με μία φωτογραφία.
//και στο τέλος κάνω το export για να μπορέσω να το χρησιμοποιήσω όπου χρειαστεί.