import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';




class App extends Component {
  render() {
    return (
        <div className="wrapper">
          <SayFullName name="John" surname="Smith" link="http://www.google.com" />
          <SayFullName name="Rober" surname="Dou" link="http://www.facebook.com" />
          <SayFullName name="Leonard" surname="Bill" link="http://www.yahoo.com" />
        </div>
    );
  }
}


function SayFullName(props){
    return(
        <div>
        <h1>My name is {props.name}, lastname - {props.surname}</h1>
        <a href={props.link}>Link to website</a>
        </div>
    )
}
export default App;
