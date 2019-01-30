import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styled from 'styled-components';

import Main from './components/Main'

import Menu from './components/Menu'

import Header from './components/Header'



class App extends Component {
  render() {
    return (
          <div className="App">
              <Header />
              <Menu />
              <Main />
          </div>
    );
  }
}

export default App;
