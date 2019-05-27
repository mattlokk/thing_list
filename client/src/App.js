import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/itemModal';

import { Provider } from 'react-redux';
import store from './store';

import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <AppNavbar />
        <ShoppingList></ShoppingList>
      </div>

=======
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList></ShoppingList>
          </Container>
        </div>
      </Provider>
>>>>>>> 02ccf8a54a90ab3aea293792f3a41d909965e5c3
    );
  }
}

export default App;
