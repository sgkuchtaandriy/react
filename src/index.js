import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*
function Hello(){
    let phrase = "World"
    return(
        <h1> Hello {phrase}! </h1>
    )
}

function SayFullName(props){
    return(
        <div>
        <h1>My name is {props.name}, lastname - {props.surname}</h1>
        <a href={props.link}>Link to website</a>
        </div>
    )
}

function MeetAll(){
    return(
        <div>
        <SayFullName name="John" surname="Smith" link="http://www.google.com" />
        <SayFullName name="Rober" surname="Dou" link="http://www.facebook.com" />
        <SayFullName name="Leonard" surname="Bill" link="http://www.yahoo.com" />
        </div>
    )
}
*/
//const element = <SayFullName name="John" surname="Smith" link="http://www.google.com" />;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();