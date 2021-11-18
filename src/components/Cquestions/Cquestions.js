import React , {Component} from 'react';
import './Cquestions.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion,Card } from "react-bootstrap";
//κάνω τα import που χρειάζεται και στην συνέχεια φτιάχνω το class
//με τις accordion ερωτήσεις όπως μας είχε ζητηθεί.
class Cquestions extends Component{
    render(){
        return(
            <div>
            <h3>Συχνές ερωτήσεις για το εμβόλιο</h3>
                    <Accordion>
                        <Card className="accord">
                            <Accordion.Toggle as={Card.Header} eventKey="0"className="accordion" >
                                Πόσα εμβόλια μπορώ να κάνω για τον COVID?
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Ανάλογα την εταιρία που θα επιλέξετε. Μπορείτε να κάνετε 1 ή 2 δόσεις.</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card className="accord">
                            <Accordion.Toggle as={Card.Header} eventKey="1" className="accordion">
                                Πόσο καιρό χρειάζεται το εμβόλιο για να δράσει?
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Από την τελευταία δόση χρειάζεστε περίπου 15 με 20 μέρες.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="accord">
                            <Accordion.Toggle as={Card.Header} eventKey="2" className="accordion">
                               Πόσο σοβαρά είναι τα συμπτώματα του COVID?
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="2">
                                <Card.Body>Αυτό εξαρτάται από τον οργανισμό του ανθρώπου και την ηλικία του.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
          </div>
        );
    }
} 

export default Cquestions;