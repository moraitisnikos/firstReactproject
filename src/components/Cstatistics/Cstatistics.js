import React , {useEffect,useState}  from 'react';
import './Cstatistics.css';
import TextField from '@material-ui/core/TextField';
import { result } from 'lodash';

//χρησιμοποιώ το axios για να κάνω την κλήση που θέλω και έχω το get για να πάρω τα αποτελέσματα που θέλω
//μέσα στο return φτιάχνω τις 2 ημερομηνίες για να βάλει τις μέρες που θέλει ο χρήστης και 
//να του δώσει τα αποτελέσματα που θέλει για τα εμβόλια.

function Cstatistics({data}) {
let [results, setResults] = useState([])

useEffect(() => {
const axios = require('axios');
axios.get('https://data.gov.gr/api/v1/query/mdg_emvolio', {
  headers: {
    authorization:'token  d2647654fac157751e7f43e2775cf4727f01a679'
  }
}).then(res => {
  const data = res.data;
  console.log(data);
  setResults(data);
});
}, [])
//κάνω κλήση στο api με το token που μου έχουν δώσει και κάνω console.log για να δω τα αποτελέσματα.
//αν η εφαρμογή γινόταν δημόσια το authorization token δεν θα έπρεπε να ήταν εδώ αλλά σε ξεχωριστό αρχείο και 
//χωρίς να φαίνεται σε κανέναν.
return(
  <div>
     <form>
      <TextField
          id="date"
          label="Από"
          type="date"
          defaultValue="2021-06-20"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="date"
          label="Έως"
          type="date"
          defaultValue="2021-06-25"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button>Submit</button>
      </form>
    </div> 
  );
}
export default Cstatistics;
