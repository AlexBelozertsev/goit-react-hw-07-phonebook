import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from './components/Layout';
import Title from './components/Title';
import Form from './components/Form';
import Filter from './components/Filter';
import Contacts from './components/Contacts';
import { selectors, phonebookOperations } from './redux';

class App extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    const { contacts } = this.props;
    return (
      <Layout>
        <Title text={'Phonebook'} />
        <Form contacts={contacts} />
        {contacts.length > 0 && <Title text={'Contacts'} />}
        {contacts.length > 1 && <Filter />}
        <Contacts />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  contacts: selectors.getAllContacts(state),
});
const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(phonebookOperations.getContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
