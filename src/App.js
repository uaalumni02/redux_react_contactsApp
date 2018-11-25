import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Add from './Components/Add/Add';
import Contacts from './Contacts/Contacts';
import * as contactActions from './actions/contactActions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

  
    this.submitHandler = this.submitHandler.bind(this);
    this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
    this.handleLastnameChange = this.handleLastnameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleDeleteContact = this.handleDeleteContact.bind(this);

  }

  componentDidMount() {
    console.log(this.props)

    // fetch('https://api.myjson.com/bins/qip08')
    //   .then(response => response.json())
    //   .then(contacts => this.setState({ contacts, allContacts: contacts }))
  }

  submitHandler(event) {
    event.preventDefault();
    const { first_name, last_name, phone } = this.state;
    console.log(first_name, last_name, phone)
    const newContact = { first_name, last_name, phone, id: 5 };
    this.props.actions.Add(newContact)
    
  }

  handleFirstnameChange(event) {
    const first_name = event.target.value;
    this.setState({ first_name })
  }

  handleLastnameChange(event) {
    const last_name = event.target.value;
    this.setState({ last_name })
  }

  handlePhoneChange(event) {
    const phone = event.target.value;
    this.setState({ phone })
  }

  handleDeleteContact(index) {
    this.props.actions.Delete(index);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Contact Book</h1>
        </header>
        <Add 
        submitHandler={this.submitHandler}
        handleFirstnameChange={this.handleFirstnameChange}
        handleLastnameChange={this.handleLastnameChange}
        handlePhoneChange={this.handlePhoneChange}
        />
        <Contacts
          contacts={this.props.contacts}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(contactActions, dispatch)
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
