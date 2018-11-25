import React from 'react';
import "./Add.css"

const Add = (props) => {
    return (
        <div className="add-box">
        <form onSubmit={ props.submitHandler }>
  <label>
    FirstName:
    <input type="text" name="firstname" onChange={ props.handleFirstnameChange } />
    LastName:
    <input type="text" name="lastname"  onChange={ props.handleLastnameChange }/>
    PhoneNumber:
    <input type="text" name="phonenumber"  onChange={ props.handlePhoneChange }/>
  </label>
  <input type="submit" value="Submit" />
</form>
        </div>
    );
}
export default Add;