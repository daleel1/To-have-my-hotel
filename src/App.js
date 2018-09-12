import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Logo, { thing } from "./Logo";
const Booking = () => {
  return (
    <p> new booking availabel for {new Date().toLocaleDateString()}</p>
  )
};

const SpecialDeals = (props) =>{
      return (
    <p>
      {props.mentors.map(name => (
        <li>{name}</li>
      ))}
    </p>
);};

class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <Logo name ="new hotel" location= "London"/>
        </header>
        <Booking />
        <SpecialDeals  mentors = {['New', 'Kash', 'Davide', 'German', 'Gerald']} />
        { thing }
      </div>;
  }
}

export default App;
