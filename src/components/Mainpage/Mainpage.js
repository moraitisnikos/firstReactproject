import React , {Component} from 'react';
import './Mainpage.css';
import emvolio from './emvolio.png';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import ReactPlayer from "react-player"
//κάνω τα import που χρειάζεται η συγκεκριμένη σελίδα
//φτιάχνω τα κομμάτια του κώδικα που χρειάζεται η σελίδα 
//πχ τελευταία νέα, γενικές πληροφορίες , carousel με φωτογραφίες, video από youtube
//και στο τέλος το κάνω export το class για να μπορέσω να τα χρησιμοποιήσω όπου χρειάζεται.
//με css τους δίνω διαφορετική μορφή για να είναι πιο ευπαρουσίαστο.
class Mainpage extends Component {
    render(){
        return(
            <div className="eutheia">
                <div className="fastnews">
                    <div className="small">
                        <h6 className="mininews">Τελευταία νέα</h6>
                        <p>κατά μέσο όρο: 2700 νέα κρούσματα κάθε μέρα</p>
                        <p>Εστίαση ανοίγει στις 3/5/2021</p>
                        <p>Πάσχα : αρκετοί έλεγχοι από την αστυνομία για εκτός νομού μετακινήσεις</p>
                    </div>
                </div>
                <div className="container">
                <div className="pageinfo">
                <div className="mainpageinfo">
                <p>
                Η Εθνική Εκστρατεία Εμβολιασμού για την COVID-19 ξεκίνησε.<br/> Το εμβόλιο είναι στα χέρια μας. 
                <br/>Εγκεκριμένο για την ασφάλεια, την ποιότητα και την αποτελεσματικότητά του<br/>
                 από τους αρμόδιους διεθνείς και εθνικούς οργανισμούς,<br/> τον Παγκόσμιο Οργανισμό Υγείας, 
                 <br/>τον EMA (European Medicines Agency) και τον FDA (US Food and Drug Administration).<br/>
                Ο εμβολιασμός, δωρεάν για όλους, είναι σε εξέλιξη για τους ανθρώπους στην πρώτη γραμμή της υγείας,<br/> 
                για τις ηλικίες άνω των 55 ετών.<br/>
                Στόχος, να εμβολιαστεί το σύνολο του πληθυσμού άνω των 18 ετών. <br/>Η Εθνική Επιτροπή Εμβολιασμών 
                μπορεί να αλλάξει την προτεραιότητα ανάλογα 
                με τον αριθμό των δόσεων που είναι διαθέσιμες.<br/>
                Το εμβόλιο είναι προαιρετικό,<br/> 
                αλλά απαραίτητο για να προστατεύσουμε τον εαυτό μας και τους συνανθρώπους μας.<br/> Και δεν ξεχνάμε.<br/> 
                Συνεχίζουμε να φοράμε μάσκα και να κρατάμε αποστάσεις για όσο χρειαστεί.
                </p>  
                </div>
                </div>
                <div className="youtube-videos">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=y66fZlPlLeQ"
                />
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=hjh5oeeipjw"/>
                </div>  
                </div>         
                <AliceCarousel autoPlay autoPlayInterval="3000" className="carous">
                <img src={emvolio} className="sliders" alt="Emvolio"/>
                <img src={emvolio} className="sliders" alt="Emvolio"/>
                <img src={emvolio} className="sliders" alt="Emvolio"/>
                <img src={emvolio} className="sliders" alt="Emvolio"/>
                </AliceCarousel>
            </div>  
        );
    }
}

export default Mainpage;
