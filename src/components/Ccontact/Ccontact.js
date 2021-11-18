import React from "react";
import ReactFormInputValidation from "react-form-input-validation";
import "./Ccontact.css";
//κάνω import ό,τι χρειάζεται και στην συνέχεια φτιάχνω την class μου και
//φτιάχνω τα πεδία τα οποία είναι κενά στην αρχή 
//στην συνέχεια βάζω κάποιoυς ελέγχους όπως πχ στο mail όπου πρέπει να έχει 
//την μορφή που έχει το email αλλιώς δεν γίνεται δεκτό.
//και στο τέλος φτιάχνω την φόρμα μου με τα απαραίτητα πεδία.
//και στο τέλος το κάνω export.
class Ccontact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        message:"",
        Fname: "",
        Lname: "",
        email: "",
        phone_number: ""
      },
      errors: {}
    };
    this.form = new ReactFormInputValidation(this);
    this.form.useRules({
        message:"required",
        Fname: "required",
        Lname: "required",
        email: "required|email",
        phone_number: "required|numeric|digits:10",
    });
  }
 
  render() {
    return (
      <div className="asd">
      <p>Για οποιοδήποτε πρόβλημα ή διευκρίνηση συμπληρώστε την παρακάτω φόρμα επικοινωνίας με τους διαχειριστές της εφαρμογής</p>
        <div className="formtalk">
        <form onSubmit={this.form.handleSubmit}>
          <div className="talking">
            <p>
              <label>
                Μήνυμα
                <input
                  minLength="10"
                  type="text"
                  name="message"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.message}
                />
              </label>
              <label className="error">
                {this.state.errors.message ? this.state.errors.message : ""}
              </label>
            </p>

            <p>
              <label>
                Επώνυμο
                <input
                  type="text"
                  name="Lname"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.Lname}
                />
              </label>
              <label className="error">
                {this.state.errors.Lname ? this.state.errors.Lname : ""}
              </label>
            </p>

              <p>
              <label>
                Όνομα
                <input
                  type="text"
                  name="Fname"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.Fname}
                />
              </label>
              <label className="error">
                {this.state.errors.Fname ? this.state.errors.Fname : ""}
              </label>
            </p>
 
            <p>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.email}
                />
              </label>
              <label className="error">
                {this.state.errors.email ? this.state.errors.email : ""}
              </label>
            </p>
 
            <p>
              <label>
                Τηλέφωνο
                <input
                  type="tel"
                  name="phone_number"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.phone_number}
                />
              </label>
              <label className="error">
                {this.state.errors.phone_number ? this.state.errors.phone_number : ""}
              </label>
            </p>
            <p>
              <button type="submit">Submit</button>
            </p>
            </div>
        </form>
        </div>
        <div className="side">Ας μείνουμε όλοι ασφαλείς και ενωμένοι</div>
        </div>
    )
  }
}

export default Ccontact;
