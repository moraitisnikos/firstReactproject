import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'center',
    flexWrap: 'wrap',
  },
}));
//δημιουργώ το εικονίδιο για επιλογή ημέρας και ώρας με δυνατότητα αλλαγής από τον χρήστη.
//αυτόν τον component κάνω import στο Cappointment για να εμφανιστεί στην σελίδα μου.
//το δημιουργώ σε ξεχωριστό σημείο για να μπορέσω να το χρησιμοποιήσω αν χρειαστεί σε κάποιο άλλο σημείο 
//χωρίς να γράφω όλον τον κώδικα ξανά και χωρίς να γεμίζει η σελίδα με επιπλέον κώδικα.
export default function DateAndTimePickers() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="Προτεινόμενη ημερομηνία ραντεβού"
        type="datetime-local"
        defaultValue="2021-07-30T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}